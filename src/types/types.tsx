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
    title: string;
    buttonLabel: string;
    columns: string[];
    data: { [key: string]: any }[]; 
    /* data: { name: string, image: string, quantity: number, published: boolean }[]*/
}

export type Tbutton =

{
    btn_path:string,
    btn_alt:string,
    handlefunc:(rowId?:any)=>any
}

export type TTableData = {
    id?:number;
    full_name?:string;
    email?:string;
    message?:string;
}

export interface ContactMessagesProps {
    title?: string;
    buttonLabel?: string;
    columns: string[];
    data: Array<TTableData>;
    buttons?:Tbutton[];
    
}
