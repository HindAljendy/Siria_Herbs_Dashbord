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
