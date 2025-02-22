import type { ProductCart } from '@/types/myProductCart';

export function fetchCartItems(): Promise<ProductCart[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          imageSource: "https://claroperupoc.vtexassets.com/arquivos/ids/2208571/image-66bf85f4eee2407882999bd0c5c13b91.jpg?v=638648903093800000",
          productName: 'Auriculares 1',
          unitPrice: 100,
        },
        {
          imageSource: "https://claroperupoc.vtexassets.com/arquivos/ids/2208571/image-66bf85f4eee2407882999bd0c5c13b91.jpg?v=638648903093800000",
          productName: 'Auriculares 2',
          unitPrice: 100,
        },
        {
          imageSource: "https://claroperupoc.vtexassets.com/arquivos/ids/2208571/image-66bf85f4eee2407882999bd0c5c13b91.jpg?v=638648903093800000",
          productName: 'Auriculares 3',
          unitPrice: 100,
        }
      ])
    }, 100);
  });

}
