export type ProductArrayType = {
    id: number
    title: string
    description: string
    price: number
    currency: string
    modifiedPrice: number
}

export const productsArray: ProductArrayType[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12...',
        price: 750,
        currency: 'usd',
        modifiedPrice: 0,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8...',
        price: 850,
        currency: 'usd',
        modifiedPrice: 0,
    },
    {
        id: 4,
        title: 'iPhone X',
        description: 'This is iPhone X...',
        price: 1250,
        currency: 'usd',
        modifiedPrice: 0,
    },
]
