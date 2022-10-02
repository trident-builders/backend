export interface ProductSerialNumber {
    erp_prod_id:string,
    inv_loc_code:string,
    ext_prod_id:string,
    sku:string,
    unique_id:string,
    status:string,
    invoice_no:string,
    sale_invoice_no:string,
    row_added_by:string,
    row_added_dttm:string,
    row_updated_by:string,
    row_updated_dttm:string
}

export interface Pagination {
    erp_prod_id:string,
    limit:number,
    page:number
}