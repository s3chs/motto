import React from 'react';
import menu, { Menu, Product } from '../../data/menu';
import { destructureString } from '../../utils/useDestructureString';

export default function MenuComponent() {
    const destructuredMenuTitles = menu.map((menu) =>
        destructureString(menu.menuTitle, menu.menuTitleLocoScrollValues)
    );

    return (
        <div className="menu-container" data-scroll-section>
      <span className="section-title" data-scroll data-scroll-speed="1">
        menu
      </span>

            {menu.map((menu: Menu, menuIndex: number) => (
                <div className="menu-section" key={menuIndex}>
                    <div className={`menu-section-title ${menu.customClass}`}>
                        {destructuredMenuTitles[menuIndex].map((letter: JSX.Element, letterIndex: number) => (
                            <React.Fragment key={letterIndex}>{letter}</React.Fragment>
                        ))}
                    </div>
                    {menu.products.map((product: Product, productIndex: number) => (
                        <div className={`product ${menu.customClass}`} key={productIndex} data-scroll data-scroll-speed="0.5">
                            <div className="product-details">
                                <span className="product-title">{product.productTitle}</span>
                                <span className="product-ingredients">
                  {product.productIngredients?.map((ingredient: string, ingredientIndex: number) => (
                      <span key={ingredientIndex}>
                      {ingredient}
                          {ingredientIndex === (product.productIngredients?.length ?? 0) - 1 ? '' : ', '}
                    </span>
                  ))}
                </span>
                            </div>
                            <div className="product-price">{product.productPrice}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
