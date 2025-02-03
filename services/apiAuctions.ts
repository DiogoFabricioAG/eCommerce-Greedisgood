import type { AuctionType } from '@/types/myAuctions';

export function fetchAuctions(): Promise<AuctionType[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    image:
                        "https://www.car-mart.com/wp-content/uploads/2024/06/red-chevy-sedan.png",
                    category: "Vehículos",
                    hasBidders: true,
                    owner: "Juan Perez",
                    productName: "Carro",
                    oldPrice: 10,
                    price: 20,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 5,
                },
                {
                    id: 2,
                    image: "https://rymportatiles.com.pe/cdn/shop/files/Samsung-Galaxy-A15.png",
                    category: "Tecnología",
                    hasBidders: true,
                    owner: "Juan Perez",
                    productName: "Celular",
                    oldPrice: 100,
                    price: 500,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 10,
                },
                {
                    id: 3,
                    image:
                        "https://primroseperu.com/lima/410-medium_default/caja-sorpresa-dulce-amor.jpg",
                    category: "Comestibles",
                    hasBidders: true,
                    owner: "Juan Perez",
                    productName: "Caja de Chocolates",
                    oldPrice: 10,
                    price: 200,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 30,
                },
                {
                    id: 4,
                    image:
                        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132171422_01/w=800,h=800,fit=pad",
                    category: "Ropa y Accesorios",
                    hasBidders: true,
                    owner: "Juan Perez",
                    productName: "Camisa",
                    oldPrice: 150,
                    price: 300,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 10,
                },
                {
                    id: 5,
                    image:
                        "https://www.car-mart.com/wp-content/uploads/2024/06/red-chevy-sedan.png",
                    category: "Vehículos",
                    owner: "Juan Perez",
                    hasBidders: true,
                    productName: "Carro",
                    oldPrice: 10,
                    price: 20,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 5,
                },
                {
                    id: 6,
                    image:
                        "https://www.car-mart.com/wp-content/uploads/2024/06/red-chevy-sedan.png",
                    category: "Vehículos",
                    hasBidders: true,
                    owner: "Juan Perez",
                    productName: "Carro",
                    oldPrice: 10,
                    price: 20,
                    timeLeft: new Date("2025-02-04T12:00:00"),
                    numBidders: 5,
                },
            ]);
        }, 100);
    });
}