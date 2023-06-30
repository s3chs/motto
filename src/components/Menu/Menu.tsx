import menu, { Menu, Product } from '../../data/menu';

export default function MenuComponent() {
    return (
        <div className="menu-container" data-scroll-section>
            <span className="section-title" data-scroll data-scroll-speed='1'>menu</span>

            {menu.map((menu: Menu, menuIndex: number) => (
                <div className="menu-section" key={menuIndex}>
                    <div className={`menu-section-title ${menu.customClass}`}>
                        {menu.menuTitle.split('').map((letter: string, letterIndex: number) =>
                            letter === ' ' ?
                                (<span data-scroll data-scroll-speed={menu.menuTitleLocoScrollValues[letterIndex]}
                                       key={letterIndex}>&nbsp;</span>) :
                                (<span data-scroll data-scroll-speed={menu.menuTitleLocoScrollValues[letterIndex]}
                                       key={letterIndex}>{letter}</span>),
                        )}
                    </div>
                    {menu.products.map((product: Product, productIndex: number) => (
                        <div className={`product ${menu.customClass}`} key={productIndex} data-scroll data-scroll-speed='0.5'>
                            <div className="product-details">
                                <span className="product-title">{product.productTitle}</span>
                                <span className="product-ingredients">
                                    {product.productIngredients?.map((ingredient: string, ingredientIndex: number) => (
                                        <span key={ingredientIndex}>{ingredient}{ingredientIndex ===
                                        (product.productIngredients?.length ?? 0) - 1 ? '' : ', '} </span>
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
