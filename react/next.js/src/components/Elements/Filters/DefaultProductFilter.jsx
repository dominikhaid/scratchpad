import React, {useState} from 'react';
import FilterOutlined from 'public/icons/phosphor-icons/assets/duotone/funnel-duotone.svg';
import DollarIcon from 'public/icons/phosphor-icons/assets/duotone/currency-dollar-duotone.svg';
import InputFilter from 'components/Elements/Inputs/InputFilter';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function DefaultProductFilter({visible, products, setDatalist}) {
  DefaultProductFilter.propTypes = {
    visible: PropTypes.bool,
    products: PropTypes.array,
    setDatalist: PropTypes.func,
  };

  let initData = {
    colors: [],
    productLine: [],
    vendors: [],
    maxPrice: Math.max.apply(
      Math,
      products.map(function (o) {
        return o.MSRP;
      }),
    ),
    minPrice: Math.min.apply(
      Math,
      products.map(function (o) {
        return o.MSRP;
      }),
    ),
  };

  let initFilter = JSON.parse(JSON.stringify(initData));
  const [active, setActive] = useState(visible ? visible : false);

  initData.colors = [
    ...new Set(
      products
        .map(e => e.colors)
        .join()
        .split(','),
    ),
  ];

  initData.productLine = [...new Set(products.map(e => e.productLine))];

  initData.vendors = [...new Set(products.map(e => e.productVendor))];

  const [filter, setFilter] = useState(initFilter);

  if (!products || products < 1) return <></>;

  const handleFilterChange = (val, grp, checked) => {
    if (!val) return false;

    const tmp = Object.assign(filter);
    if (grp === 'maxPrice')
      tmp.maxPrice = grp === 'maxPrice' ? val : filter.maxPrice;
    if (grp === 'minPrice')
      tmp.minPrice = grp === 'minPrice' ? val : filter.minPrice;

    if (checked) {
      tmp[grp] = tmp[grp].filter(e => e !== val);
    }

    if (!checked && grp !== 'maxPrice' && grp !== 'minPrice') {
      tmp[grp].push(val);
      tmp[grp] = [...new Set(tmp[grp])];
    }

    let data = products;
    data = data.filter(
      e => e.MSRP >= filter.minPrice && e.MSRP <= filter.maxPrice,
    );

    for (const key in filter) {
      if (filter.hasOwnProperty(key) && typeof filter[key] === 'object') {
        let tmpKey = Object.values(filter[key]);

        data = data.filter(h =>
          Object.values(h).some(l => new RegExp(tmpKey.join('|')).test(l)),
        );
      }
    }

    setFilter(tmp);
    setDatalist(data);
    return true;
  };

  const CheckList = ({group, data, title}) => {
    CheckList.propTypes = {
      data: PropTypes.array,
      title: PropTypes.string,
      group: PropTypes.string,
    };

    return (
      <div className="flex flex-col justify-center">
        <TextDivider className="mt-xl mb-none" title={title} />
        {data.map(e => (
          <InputFilter
            className="leading-3 m-none p-none"
            key={uuid()}
            input={{
              group: group,
              label: e,
              aria: `filter ${e}`,
              type: 'checkbox',
              checked: val =>
                filter &&
                filter.hasOwnProperty(group) &&
                filter[group].find(f => {
                  return f === val;
                }),
              onChange: (val, grp, checked) =>
                handleFilterChange(val, grp, checked),
            }}
          />
        ))}
      </div>
    );
  };

  const ActiveFilter = ({products, filter, handleFilterChange}) => {
    ActiveFilter.propTypes = {
      products: PropTypes.array,
      filter: PropTypes.object,
      handleFilterChange: PropTypes.func,
    };
    return (
      <div className="absolute space-x-xs">
        {Object.keys(filter).map(grp => {
          if (typeof filter[grp] === 'object')
            return filter[grp].map(val => {
              return (
                <DefaultButton
                  aria={`remove filter ${val}`}
                  title={'x ' + val}
                  className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
                  key={`color${val}`}
                  onClick={() => {
                    handleFilterChange(val, grp, true);
                  }}
                />
              );
            });

          if (
            (grp === 'maxPrice' &&
              filter[grp] !==
                Math.max.apply(
                  Math,
                  products.map(function (o) {
                    return o.MSRP;
                  }),
                )) ||
            (grp === 'minPrice' &&
              filter[grp] !==
                Math.min.apply(
                  Math,
                  products.map(function (o) {
                    return o.MSRP;
                  }),
                ))
          )
            return (
              <DefaultButton
                aria={`remove filter`}
                title={
                  grp === 'maxPrice'
                    ? 'x max. ' + filter[grp] + '$'
                    : 'x min. ' + filter[grp] + '$'
                }
                className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
                key={`color${filter[grp]}`}
                onClick={() => {
                  handleFilterChange(
                    grp === 'minPrice'
                      ? Math.min.apply(
                          Math,
                          products.map(function (o) {
                            return o.MSRP;
                          }),
                        )
                      : Math.max.apply(
                          Math,
                          products.map(function (o) {
                            return o.MSRP;
                          }),
                        ),
                    grp,
                  );
                  // set_filter(products, filter);
                }}
              />
            );
        })}
      </div>
    );
  };

  return (
    <div key={uuid()}>
      <DropDownButton
        aria={`open sorting filter dropdown`}
        type="icon"
        layout="grid"
        active={active}
        setActive={setActive}
        className="small btn-options-filter"
        style={{height: '45px', width: '45px'}}
        icon={<FilterOutlined />}
      >
        <CheckList
          title="Product Line"
          group="productLine"
          data={initData.productLine}
        />
        <CheckList title="Colors" group="colors" data={initData.colors} />
        <CheckList title="Vendors" group="vendors" data={initData.vendors} />
        <div className="flex flex-col justify-center">
          <TextDivider className="mt-xl mb-xs" title={'Price'} />
          <InputFilter
            className="leading-3 m-none p-none"
            input={{
              aria: 'minimum price filter',
              group: 'minPrice',
              prefix: [
                <DollarIcon style={{width: '20px'}} key={'dollar-min'} />,
                <span>min.</span>,
              ],
              type: 'range',
              unit: '$',
              value: filter.minPrice,
              min: Math.min.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              max: Math.max.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              onChange: (val, grp) => handleFilterChange(val, grp),
            }}
          />

          <InputFilter
            className="leading-3 m-none p-none"
            input={{
              group: 'maxPrice',
              aria: 'maximum price filter',
              prefix: [
                <DollarIcon style={{width: '20px'}} key={'dollar-max'} />,
                <span>max.</span>,
              ],
              type: 'range',
              unit: '$',
              value: filter.maxPrice,
              min: Math.min.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              max: Math.max.apply(
                Math,
                products.map(function (o) {
                  return o.MSRP;
                }),
              ),
              onChange: (val, grp) => handleFilterChange(val, grp),
            }}
          />
        </div>
      </DropDownButton>
      <ActiveFilter
        products={products}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
