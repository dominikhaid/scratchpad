import DefaultImage from 'components/Elements/Images/DefaultImage';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function DefaultProductSlider({
  images,
  interval,
  width,
  height,
  layout,
  style,
  className,
}) {
  DefaultProductSlider.propTypes = {
    images: PropTypes.array,
    interval: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    layout: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [play, setPlay] = useState(true);
  let classListActive = 'slide-active animate-fadeIn p-4xl';

  if (process.env.STORYBOOK && process.env.STORYBOOK === 'true')
    classListActive = 'slide-active p-4xl';

  if (!images) return <></>;

  const CreateSlides = ({
    images,
    play,
    activeSlide,
    setActiveSlide,
    interval,
    width,
    height,
  }) => {
    const imageInterval = () => {
      setTimeout(
        () =>
          play &&
          setActiveSlide(
            !play
              ? activeSlide
              : activeSlide < images.length - 1
              ? activeSlide + 1
              : 0,
          ),
        interval,
      );
    };

    useEffect(() => {
      play && imageInterval();

      return () => {
        clearTimeout(imageInterval);
      };
    }, [activeSlide]);

    return images.map((image, index) => (
      <div
        key={image}
        className={activeSlide === index ? classListActive : 'slide-hidden'}
        style={{
          background: '#F5F5F5',
        }}
      >
        <style global jsx>{`
          .slide-active {
            display: initinal;
            width: calc(100%) !important;
            margin-left: 0px;
          }
          .slide-hidden {
            display: none;
          }
        `}</style>
        <DefaultImage
          src={image}
          alt="product slider image"
          width={width ? width : 200}
          height={height ? height : 200}
          layout={layout ? layout : 'responsive'}
          className={className ? className + '' : ''}
          style={style}
        />
      </div>
    ));
  };

  const CreateDots = ({images, setPlay, activeSlide, setActiveSlide}) => {
    CreateDots.propTypes = {
      images: PropTypes.array,
      setPlay: PropTypes.func,
      activeSlide: PropTypes.func,
      setActiveSlide: PropTypes.func,
    };

    return (
      <div
        style={{margin: 'auto', marginTop: '-30px', width: 'max-content'}}
        className="slider-nav spaced"
      >
        {images.map((image, index) => (
          <button
            key={image + '-dot'}
            onClick={() => {
              setPlay(false);
              setActiveSlide(index);
            }}
            style={{height: '15px', width: '15px'}}
            className={
              index === activeSlide
                ? 'rounded-full opacity-100 p-none hover:opacity-100 slider-dot bg-primary'
                : 'rounded-full opacity-50 p-none hover:opacity-100 slider-dot bg-primary'
            }
          ></button>
        ))}
      </div>
    );
  };

  return (
    <>
      <CreateSlides
        images={images}
        width={width}
        height={height}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        play={play}
        interval={interval}
      />
      <CreateDots
        images={images}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        setPlay={setPlay}
      />
    </>
  );
}
