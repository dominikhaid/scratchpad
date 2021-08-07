import React from 'react';
import DefaultBreadcrumb from 'components/Elements/Breadcrumbs/DefaultBreadcrumb';
import DefaultShopMenu from 'components/Elements/Menu/DefaultShopMenu';
import PropTypes from 'prop-types';

export default function DefaultTopBar({
  user,
  style,
  className,
  card,
  updateCard,
  updateState,
  size,
  products,
}) {
  DefaultTopBar.propTypes = {
    user: PropTypes.object,
    style: PropTypes.object,
    products: PropTypes.object,
    className: PropTypes.string,
    card: PropTypes.object,
    updateCard: PropTypes.func,
    updateState: PropTypes.func,
    size: PropTypes.number,
  };

  return (
    <>
      <aside
        style={{backgroundColor: '#f9f9f9'}}
        className={
          'sm:p-lg md:p-lg align-center place-items-center py-2xl lg:px-2xl xl:px-2xl place-content-start  inline-flex flex-wrap'
        }
      >
        <DefaultBreadcrumb
          style={style}
          className={className}
          user={user}
          card={card}
          updateCard={updateCard}
          updateState={updateState}
          size={size}
        />
        <DefaultShopMenu
          user={user}
          card={card}
          products={products}
          updateCard={updateCard}
          updateState={updateState}
          size={size}
        />
      </aside>
    </>
  );
}
