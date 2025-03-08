export type CommentsProductsRequest = {
    slug: string,
    text: string,
    subject: string,
    rating: number,
    idProduct: number
}

export type CommentsProductResponse = {
    user: string,
    text: string,
    rating: number,
    subject: string,
    date: string
}