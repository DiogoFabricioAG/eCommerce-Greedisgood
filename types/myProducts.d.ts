export type DispatchType = 'both' | 'delivery' | 'pickup';

export type ProductItem = {
  id: number,
  image: string,
  category: string,
  price: number,
  old: number,
  productName: string,
  isDiscount: boolean
  dispatch: DispatchType,
  stock : number
} 