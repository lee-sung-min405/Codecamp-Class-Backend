export interface IProductsTagsServiceBulkInsert{
    names:{
        name:string;
    }[];
}

export interface IProductsTagsServiceFindByNames{
    tagNames : string[]
}