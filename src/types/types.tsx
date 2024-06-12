export interface ProductBoxProps {
    img: string;
    title_1: string;
    title_2: string;
    title_3: string;
    brandName: string;
    productNum: number;
    weight: string;
    encapsolation: string;
    numInPackage: number;
}

export interface TableProps {
    title?: string;
    buttonLabel?: string;
    columns: string[];
    data?: { [key: string]: any }[]; 
    /* data: { name: string, image: string, quantity: number, published: boolean }[]*/
}

