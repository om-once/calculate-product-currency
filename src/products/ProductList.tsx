import ProductListItem from './ProductListItem'

type Props = {
    modifiedProductArray: Array<any>
    totalPriceCount: (price: number) => void
}
const ProductList = ({ modifiedProductArray, totalPriceCount }: Props) => {
    return (
        <div className="product-list">
            {modifiedProductArray.map(
                ({
                    id,
                    title,
                    description,
                    currency,
                    modifiedPrice,
                    price,
                }) => (
                    <ProductListItem
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        currency={currency}
                        price={modifiedPrice || price}
                        totalPriceCount={totalPriceCount}
                    />
                )
            )}
        </div>
    )
}
export default ProductList
