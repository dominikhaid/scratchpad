import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import DefaultProductSlider from 'components/Elements/Slider/DefaultProductSlider';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';

export default function DefaultCard({item}) {
  DefaultCard.propTypes = {
    item: PropTypes.object,
  };

  const router = useRouter();
  const [activeColor, setColor] = useState(
    item.colors ? item.colors.split(',')[0].trim() : false,
  );

  let minWidth = '320px',
    maxWidth = '320px';

  const ProductHeader = ({item}) => {
    return (
      <div>
        <h3 className="text-2xl lg:text-4xl xl:text-4xl font-bold text-primary">
          {item.productName}
        </h3>
        <p className="text-xl mb-sm display-block">
          {item.productVendor} | {item.productLine}
        </p>
      </div>
    );
  };

  return (
    <>
      <div
        className="border-2 overflow-hidden border-gray-light sm:mx-none lg:mx-none xl:mx-none md:mx-xl  bg-gray-lightest shadow-container default-card my-4xl"
        style={{
          maxWidth: `${maxWidth}`,
          minWidth: `${minWidth}`,
          flex: '1 1 320px',
        }}
      >
        <DefaultProductSlider
          activeColor={activeColor}
          item={item}
          interval={3000}
          images={item.productPhotos
            .split(',')
            .map(photo => `/images/${photo}`)}
        />
        <div className="p-2xl lg:p-4xl">
          <ProductHeader item={item} />
          <div className="flex flex-wrap items-center justify-start border-t-2 xl:justify-start mt-2xl border-primary pt-lg lg:justify-start">
            <DefaultButton
              aria={`show details ${item.productName}`}
              onClick={e => {
                e.preventDefault();
                router.push(`/products/${item.productCode}`);
              }}
              className="flex-auto flex-grow-0 mx-none my-xs"
              type="primary"
              htmlType="submit"
              title="Details"
            />
          </div>
        </div>
      </div>
    </>
  );
}
