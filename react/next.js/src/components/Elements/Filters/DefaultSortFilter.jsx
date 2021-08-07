import React, {useState} from 'react';
import SortAscendingOutlined from 'public/icons/phosphor-icons/assets/duotone/sort-ascending-duotone.svg';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import PropTypes from 'prop-types';

export default function DefaultSortFilter({
  products,
  setDatalist,
  setForceRender,
  forceRender,
  visible,
}) {
  DefaultSortFilter.propTypes = {
    visible: PropTypes.bool,
    products: PropTypes.array,
    setDatalist: PropTypes.func,
    setForceRender: PropTypes.func,
    forceRender: PropTypes.bool,
  };

  const [active, setActive] = useState(visible ? visible : false);

  const menu = [
    {
      title: 'Price (lowest first)',
      aria: 'Sort by lowst price frist',
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.MSRP > b.MSRP));
        setForceRender(!forceRender);
      },
    },
    {
      title: 'Price (highest first)',
      aria: 'Sort by highest price frist',
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.MSRP < b.MSRP));
        setForceRender(!forceRender);
      },
    },
    {
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.productName > b.productName));
        setForceRender(!forceRender);
      },
      title: 'Name (a to z)',
      aria: 'Sort by name a to z',
    },
    {
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.productName < b.productName));
        setForceRender(!forceRender);
      },
      title: 'Name (z to a)',
      aria: 'Sort by name z to a',
    },
  ];

  return (
    <DropDownButton
      type="icon"
      active={active}
      setActive={setActive}
      className="small"
      style={{height: '45px', width: '45px'}}
      icon={<SortAscendingOutlined />}
    >
      {menu.map(item => {
        return (
          <DefaultButton
            aria={item.aria}
            className="text-center rounded p-xs text-gray-dark w-100"
            key={item.title}
            type="ghost"
            title={item.title}
            onClick={e => item.onClick(e)}
          />
        );
      })}
    </DropDownButton>
  );
}
