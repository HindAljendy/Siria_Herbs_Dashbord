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

export type TEvaluation = {
    id: number | string;
    title: string;
    description: string;
    icon: File | null;
}

export type TEvaluationForm = {
    mode: 'create' | 'edit';
    evaluation: TEvaluation;
    setUpdate: () => void;
    handelHidenForm: () => void;
}

export type TStory = {
    id: number | string;
    description: string;
    file: File | null;
}

export type TStoryForm = {
    mode: 'create' | 'edit';
    story: TStory;
    setUpdate: () => void;
    handelHidenForm: () => void;
}

export type Tbutton =

{
    btn_path:string,
    btn_alt:string,
    handlefunc:(rowId?:any)=>void
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
    data: TTableData[];
    buttons?:Tbutton[];
 
}
export interface NavigationLinksProps {
    navigateMain: string;
    navigateLink: string;
    navigateSubmain: string;
}
export interface NavigationLinksProps_Settings {
    navigateMain: string;
    navigateLink: string;
    navigateSubmain: string;
    navigateSubmain2: string;
}

export interface BigNavigationLinksProps {
    navigateMain: string;
    navigateLinkMain: string;
    navigateLinkSubmain: string;
    navigateSubmain: string;
}
export type FormProduct = {
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
 /*    id:number|string,
    brand_id: number|string,
    category_id : number |string, */
    /* brand_name :string, */
    brand_id: number|string,
    category_id : number |string,
    name: string;
    subname1: string;
    subname2: string;
    product_description: string;
    code_number: string;
    weight: number |string,
    packaging_description: string;
    description_component: string;
    count_each_package: number |string;
    main_image?: null| File|string|undefined;
    additional_image?:  null| File|string |undefined; // nullable
    _method:string,
  

}
