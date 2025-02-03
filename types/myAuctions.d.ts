export type AuctionType = {
    id: number;
    image: string;
    owner: string;
    category: string;
    hasBidders: boolean;
    productName: string;
    oldPrice: number;
    price: number;
    timeLeft: Date;
    numBidders: number;
};
