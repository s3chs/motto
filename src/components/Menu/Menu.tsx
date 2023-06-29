import menu, { Menu, Product } from '../../data/menu';

export default function MenuComponent() {
    return (
        <div className="menu-container" data-scroll-section>
            <span className="section-title">menu</span>

            {menu.map((menu: Menu, menuIndex: number) => (
                <div className="menu-section" key={menuIndex}>
                    <span className={`menu-section-title ${menu.customClass}`}>{menu.MenuTitle}</span>
                    {menu.Products.map((product: Product, productIndex: number) => (
                        <div className={`product ${menu.customClass}`} key={productIndex}>
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
