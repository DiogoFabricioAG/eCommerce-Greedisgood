export type DispatchType = 'both' | 'delivery' | 'pickup';

export interface ProductItem {
  id: number,
  image: string[],
  category: string,
  price: number,
  old: number,
  productName: string,
  isDiscount: boolean
  dispatch: DispatchType,
  stock: number
}

export interface UnitProductItem extends ProductItem {
  description: string,
}

