type Props = {
    title: string
    description: string
    id: number
    currency: string
    price: number
    totalPriceCount: (price: number) => void
}

const ProductListItem = ({
    title,
    description,
    price,
    currency,
    totalPriceCount,
}: Props) => {
    return (
        <div className="product">
            <h3 className="product-title">{title}</h3>
            <div className="product-description">{description}</div>
            <div className="product-price">
                <small>{currency}</small> <strong>{price}</strong>
            </div>
            <div className="product-btn">
                <button type="button" onClick={() => totalPriceCount(price)}>
                    Buy
                </button>
            </div>
        </div>
    )
}

export default ProductListItem
