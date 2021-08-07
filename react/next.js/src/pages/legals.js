import React, {useState, useEffect} from 'react';
import {Segment, Menu, Transition, Container} from 'semantic-ui-react';
import {praseHtmlSpecialChars, returnHTML} from '@/hooks/HeFunctions';
import SecundaryMobile from '@/components/nav/SecundaryMobile';
import Head from 'next/head';

export default function Legals(props) {
  if (!process.browser) return <></>;
  const [activeItem, setActiveItem] = useState('AllgemeineInformationen');
  let htmlTag = 'h3';

  let blocks = [];
  let sectionBlocks = [];

  const [visible, setVisible] = useState(true);
  const [visibleSec, setVisibleSec] = useState(false);

  useEffect(() => {
    if (
      process.browser &&
      activeItem &&
      props.responsiveContext.viewMode === 'mobile'
    ) {
      window.document
        .querySelector(`main`)
        .scrollTo(
          0,
          window.document.querySelector(`#${activeItem}-target`).offsetTop,
        );
    }
    return () => {};
  }, [activeItem]);

  const createArraysFromString = (htmlString, htmlTag) => {
    let content = htmlString.content.replace(/\n*\r*/gm, '');
    sectionBlocks.push(
      content.match(
        /<div\sclass="wp-block-group"(.*?)>(.*?)<\/div><\/div>.*?/gm,
      ),
    );

    let regEx = new RegExp(`<${htmlTag}(.*?)>(.*?)</${htmlTag}>.*?`, 'gm');
    blocks.push(content.match(regEx));
  };

  const extractFromTag = (htmlTag, e, trim) => {
    let regEx = new RegExp(`<${htmlTag}>|</${htmlTag}>`, 'gm');
    e = e.replace(regEx, '');
    if (trim) return e.replace(/\s*/gm, '');
    return e;
  };

  const generateMenuFromString = (el, index, htmlTag) => {
    let blocksArry = [];
    const elemetFound = () => {
      blocks[index].forEach(element => {
        let tag = extractFromTag(htmlTag, element, false);
        let trimedTag = extractFromTag(htmlTag, element, true);

        blocksArry.push(
          <Menu.Item
            id={trimedTag}
            key={trimedTag}
            name={tag}
            active={activeItem === trimedTag}
            as="a"
            href={el.slug}
            onClick={e => {
              e.preventDefault();
              setVisibleSec(false);
              if (e.target) setActiveItem(e.target.getAttribute('id'));
              if (props.responsiveContext.viewMode !== 'mobile') {
                setVisible(false);
                setTimeout(() => {
                  setVisible(true);
                }, 350);
                return;
              }
              const offSet = document.querySelector('#' + trimedTag).offsetTop;
              document.querySelector('main').scrollTo(0, offSet);
            }}
          />,
        );
      });
    };

    return (
      <Menu.Item>
        <Menu.Header as="h3">{el.title}</Menu.Header>
        <Menu.Menu>
          {blocks[index] !== null ? elemetFound() : ''}
          {blocksArry}
        </Menu.Menu>
      </Menu.Item>
    );
  };

  const genrateSections = htmlTag => {
    let filteredBlock = [];
    let count = 0;
    let regEx = new RegExp(`<${htmlTag}>|</${htmlTag}>`, 'gm');
    // eslint-disable-next-line
    let filteredIndex,
      // eslint-disable-next-line
      nextBlock,
      // eslint-disable-next-line
      prevBlock,
      // eslint-disable-next-line
      nextSection,
      // eslint-disable-next-line
      prevSection = false;
    function filterBlocks() {
      do {
        if (blocks[count] !== undefined) {
          if (blocks[count] === null) count++;
          filteredIndex = blocks[count].findIndex(e => {
            return (
              e.replace(regEx, '').replace(/\s*/gm, '').indexOf(activeItem) > -1
            );
          });

          if (filteredIndex !== false && filteredIndex !== -1) {
            prevBlock = blocks[count][filteredIndex - 1];
            filteredBlock = [sectionBlocks[count][filteredIndex]];
            nextBlock = blocks[count][filteredIndex + 1];
            nextSection =
              blocks[count + 1] !== undefined
                ? blocks[count + 1][0]
                : blocks[count - 1][0];
            prevSection =
              blocks[count - 1] !== undefined
                ? blocks[count - 1][0]
                : blocks[count + 1][0];
          } else {
            count++;
          }
        } else {
          return false;
        }
      } while (filteredBlock.length === 0);
    }
    if (props.responsiveContext.viewMode !== 'mobile') filterBlocks();

    return filteredBlock.length !== 0 &&
      props.responsiveContext.viewMode !== 'mobile' ? (
      <Transition
        visible={visible}
        transitionOnMount={true}
        animation="scale"
        duration={300}
      >
        <div id="legalsWrapper" className="material-grid__col--medium--7">
          <section id="legalsContent" className="ui segment">
            <div
              id={activeItem}
              dangerouslySetInnerHTML={returnHTML(
                praseHtmlSpecialChars(filteredBlock[0]),
              )}
            />
          </section>
        </div>
      </Transition>
    ) : (
      <Transition
        visible={visible}
        transitionOnMount={true}
        animation="scale"
        duration={300}
      >
        <div id="legalsWrapper" className="material-grid__col--medium--7">
          {sectionBlocks.map((el, ind) => {
            if (Array.isArray(el)) {
              el.map((element, index) => {
                filteredBlock.push(
                  <section
                    style={{position: 'inherit'}}
                    id="legalsContent"
                    className="ui segment"
                  >
                    <div
                      id={extractFromTag(
                        htmlTag,
                        blocks[ind][index] + '-target',
                        true,
                      )}
                      dangerouslySetInnerHTML={returnHTML(
                        praseHtmlSpecialChars(element),
                      )}
                    />
                  </section>,
                );
                return true;
              });
            }
            return filteredBlock;
          })}
        </div>
      </Transition>
    );
  };

  const getPageData = () => {
    if (!process.browser) return;
    for (const key in props.pageContext.pageItems.pages) {
      if (props.pageContext.pageItems.pages.hasOwnProperty(key)) {
        const element = props.pageContext.pageItems.pages[key];
        if (element.slug === window.location.pathname.replace(/\//g, ''))
          props.pageContext.pageData = element;
      }
    }
  };

  const renderMenu = () => {
    getPageData();

    let renderArray = props.pageContext.pageData.childPages.nodes.map(
      (el, index) => {
        createArraysFromString(el, htmlTag);
        return generateMenuFromString(el, index, htmlTag);
      },
    );

    return props.responsiveContext.viewMode === 'mobile' ? (
      <SecundaryMobile
        visible={visibleSec}
        icon={'shield'}
        setVisible={setVisibleSec}
        renderItems={renderArray}
      />
    ) : (
      <div id="legalsMenuWrapper" className="material-grid__col--medium--4">
        <Segment>
          <Menu id="legalsNav" vertical>
            {renderArray.map((el, index) => {
              return el;
            })}
          </Menu>
        </Segment>
      </div>
    );
  };

  const legalsLandingPage = () => {
    return genrateSections(htmlTag);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Print & Screen-Design | Legals</title>
        <meta
          name="description"
          content="Rechtliche Informationen über den Betreiber von Dominik Haid, Print & Screen-Design. Datenschutzerklärung und Impressum."
        />
      </Head>
      <Container className="material-grid flex-center min-height">
        {renderMenu()}
        {legalsLandingPage()}
      </Container>
    </React.Fragment>
  );
}
