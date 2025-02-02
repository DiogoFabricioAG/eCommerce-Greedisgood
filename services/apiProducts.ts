
import type {ProductItem} from '@/types/myProducts'

export function fetchProducts(): Promise<ProductItem[]> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve([
                {
                  id: 1,
                  image: ["https://verdepuro.pe/wp-content/uploads/2020/06/lechuga-crespa-entera-bolsa-verde-puro.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 25,
                  productName: "Lechugas 500gr",
                  isDiscount: true,
                  dispatch: 'both',
                  stock : 10
                },
                {
                  id: 2,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Tecnología",
                  price: 20,
                  old: 27,
                  productName: "Play Station 5",
                  isDiscount: true,
                  dispatch: 'delivery',
                  stock : 10
                },
                {
                  id: 3,
                  image: ["https://oechsle.vteximg.com.br/arquivos/ids/16947092-1000-1000/image-8d6df298838a44bf9318eb57eaa3fd19.jpg"],
                  category: "Juguetes y Juegos",
                  price: 20,
                  old: 30,
                  productName: "Pelota de Futbol",
                  isDiscount: true,
                  dispatch: 'pickup',
                  stock : 10
                },
                {
                  id: 4,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 50,
                  productName: "Producto 1",
                  isDiscount: true,
                  dispatch: 'pickup',
                  stock : 10
                },
                {
                  id: 5,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 20.5,
                  productName: "Producto 1",
                  isDiscount: true,
                  dispatch: 'delivery',
                  stock : 15
                },
                {
                  id: 6,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 29,
                  productName: "Producto 1",
                  isDiscount: false,
                  dispatch: 'both',
                  stock : 24
                },
                {
                  id: 7,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 25,
                  productName: "Producto 1",
                  isDiscount: true,
                  dispatch: 'both',
                  stock : 10
                },
                {
                  id: 8,
                  image: ["https://pesonyb2c.vtexassets.com/arquivos/ids/224927/711719595700_001.jpg"],
                  category: "Comestibles",
                  price: 20,
                  old: 25,
                  productName: "Producto 1",
                  isDiscount: true,
                  dispatch: 'both',
                  stock : 10
                },
            
              ])
        }, 100);
    
    });
}