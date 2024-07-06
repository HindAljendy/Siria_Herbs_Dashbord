export interface ProductBoxProps {
    img:  File|null|string;
    title_1: string;
    title_2: string;
    title_3: string;
    brandName: string;
    productNum: number|string;
    weight:number |string;
    packaging: string;
    numInPackage: number |string;
    onDelete: () => void; 
    onDuplicate: () => void;
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
export interface NavigationLinksProps {
    navigateMain: string;
    navigateLink: string;
    navigateSubmain: string;
}

export interface BigNavigationLinksProps {
    navigateMain: string;
    navigateLinkMain: string;
    navigateLinkSubmain: string;
    navigateSubmain: string;
}

export interface FormProduct {
    id:number|string,
    brand_id: number|string,
    category_id : number |string,
    brand_name :string,
    name: string;
    subname1: string;
    subname2: string;
    product_description: string;
    code_number: string;
    weight: number |string,
    packaging_description: string;
    description_component: string;
    count_each_package: number |string;
    main_image: File|null|string;
    additional_image?: File |null; // nullable
  

}

export interface FormUpdateProduct {
    id:number|string,
    brand_id: number|string,
    category_id : number |string,
    brand_name :string,
    name: string;
    subname1: string;
    subname2: string;
    product_description: string;
    code_number: string;
    weight: number |string,
    packaging_description: string;
    description_component: string;
    count_each_package: number |string;
    main_image: File|null|string;
    additional_image?: File |null; // nullable
    _method:string,
  

}
