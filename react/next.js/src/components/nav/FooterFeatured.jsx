import React from 'react';
import {List, Icon} from 'semantic-ui-react';

export default function FooterFeatured(props) {
  return (
    <div
      id="footer-featured"
      className="material-grid__col--medium--12 flex-center margin-mobile-bottom padding-mobile-top"
    >
      <List horizontal>
        <List.Item
          name={'reactjs'}
          key={'reactjs'}
          rel="noopener noreferrer"
          className="inverted"
          as="a"
          href="https://reactjs.org/"
          target="_blank"
        >
          <Icon name="react" size="big" />
        </List.Item>
        <List.Item
          name={'nodejs'}
          key={'nodejs'}
          rel="noopener noreferrer"
          className="inverted"
          as="a"
          href="https://nodejs.org/en/"
          target="_blank"
        >
          <Icon name="node" size="big" />
        </List.Item>
        <List.Item
          name={'npmjs'}
          key={'npmjs'}
          rel="noopener noreferrer"
          className="inverted"
          as="a"
          href="https://www.npmjs.com/"
          target="_blank"
        >
          <Icon name="npm" size="big" />
        </List.Item>
        <List.Item
          name={'js'}
          key={'js'}
          rel="noopener noreferrer"
          className="huge"
          as="a"
          href="https://developer.mozilla.org/de/docs/Web/JavaScript"
          target="_blank"
        >
          <Icon name="js" size="big" />
        </List.Item>
        <List.Item
          name={'lesscss'}
          key={'lesscss'}
          rel="noopener noreferrer"
          className="inverted"
          as="a"
          href="http://lesscss.org/"
          target="_blank"
        >
          <Icon name="less" size="big" />
        </List.Item>
        <List.Item
          name={'sass'}
          key={'sass'}
          rel="noopener noreferrer"
          className="inverted"
          as="a"
          href="https://sass-lang.com/"
          target="_blank"
        >
          <Icon name="sass" size="big" />
        </List.Item>
      </List>
    </div>
  );
}
