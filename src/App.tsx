import ProductList from 'products/ProductList'
import { useState } from 'react'
import { productsArray } from 'utils/productsArray'
const App = () => {
    const [modifiedProductArray, setModifiedProductArray] =
        useState(productsArray)
    const [productData, setProductData] = useState({
        totalPrice: 0,
    })
    const [conversionDone, setConversionDone] = useState({
        usd: true,
        eur: false,
        uah: false,
        pol: false,
    })
    const setNewPrice = (currencyValue: string) => {
        setModifiedProductArray((prevState) =>
            prevState.map((item) => {
                let modifiedCurrency = item.currency
                let modifiedTotal = productData.totalPrice
                console.log(modifiedTotal)

                switch (currencyValue) {
                    case 'usd':
                        item.modifiedPrice = item.price
                        modifiedCurrency = currencyValue
                        if (conversionDone.eur === true) {
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal / 0.92
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: true,
                                eur: false,
                                uah: false,
                                pol: false,
                            }))
                        }
                        if (conversionDone.uah === true) {
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal / 38
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: true,
                                eur: false,
                                uah: false,
                                pol: false,
                            }))
                        }
                        if (conversionDone.pol === true) {
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal / 4
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: true,
                                eur: false,
                                uah: false,
                                pol: false,
                            }))
                        }
                        break
                    case 'eur':
                        if (conversionDone.usd === true) {
                            item.modifiedPrice = item.price * 0.92
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal * 0.92
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: true,
                                uah: false,
                                pol: false,
                            }))
                        }
                        if (conversionDone.uah === true) {
                            item.modifiedPrice = item.price * 0.92
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 38) * 0.92
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: true,
                                uah: false,
                                pol: false,
                            }))
                        }
                        if (conversionDone.pol === true) {
                            item.modifiedPrice = item.price * 0.92
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 4) * 0.92
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: true,
                                uah: false,
                                pol: false,
                            }))
                        }
                        break
                    case 'uah':
                        if (conversionDone.usd === true) {
                            item.modifiedPrice = item.price * 38
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal * 38
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: true,
                                pol: false,
                            }))
                        }
                        if (conversionDone.eur === true) {
                            item.modifiedPrice = item.price * 38
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 0.92) * 38
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: true,
                                pol: false,
                            }))
                        }
                        if (conversionDone.pol === true) {
                            item.modifiedPrice = item.price * 38
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 4) * 38
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: true,
                                pol: false,
                            }))
                        }
                        break
                    case 'pol':
                        if (conversionDone.usd === true) {
                            item.modifiedPrice = item.price * 4
                            modifiedCurrency = currencyValue
                            modifiedTotal = modifiedTotal * 4
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: false,
                                pol: true,
                            }))
                        }
                        if (conversionDone.eur === true) {
                            item.modifiedPrice = item.price * 4
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 0.92) * 4
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: false,
                                pol: true,
                            }))
                        }
                        if (conversionDone.uah === true) {
                            item.modifiedPrice = item.price * 4
                            modifiedCurrency = currencyValue
                            modifiedTotal = (modifiedTotal / 38) * 4
                            setConversionDone((prev) => ({
                                ...prev,
                                usd: false,
                                eur: false,
                                uah: false,
                                pol: true,
                            }))
                        }
                        break
                    default:
                        item.modifiedPrice = item.price
                        modifiedCurrency = currencyValue
                        break
                }
                setProductData(() => ({
                    totalPrice: modifiedTotal,
                }))

                return {
                    ...item,
                    modifiedPrice: item.modifiedPrice,
                    currency: modifiedCurrency,
                }
            })
        )
    }

    const totalPriceCount = (price: number) => {
        setProductData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    console.log(productData.totalPrice)

    return (
        <>
            <div className="container">
                <div className="header">
                    <h2>Our shop page</h2>
                    <button type="button" onClick={() => setNewPrice('usd')}>
                        Usd
                    </button>
                    <button type="button" onClick={() => setNewPrice('eur')}>
                        Eur
                    </button>
                    <button type="button" onClick={() => setNewPrice('uah')}>
                        Uah
                    </button>
                    <button type="button" onClick={() => setNewPrice('pol')}>
                        Pol
                    </button>
                </div>
                <ProductList
                    modifiedProductArray={modifiedProductArray}
                    totalPriceCount={totalPriceCount}
                />
                <p className="total">total: {productData.totalPrice}</p>
            </div>
        </>
    )
}

export default App
