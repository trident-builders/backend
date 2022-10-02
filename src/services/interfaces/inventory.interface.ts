export interface Iinventory {
    inv_loc_code: string,
    profile: string,
    pim_prod_id: string,
    psn: string,
    ext_prod_id: string,
    erp_prod_id: string,
    sku: string,
    allowed_channels: string,
    profile_stock_inhand: number,
    profile_stock_res: number,
    profile_fullfillment_method: string,
    channel_stock_inhand: number,
    channel_stock_res: number,
    channels: string,
    channel_priority: string,
    row_added_by: string,
    row_added_dttm: string,
    row_updated_by: string,
    row_updated_dttm: string,
    product_name: string,
    img_url: string,
    product_details: string,
    seller_code?: string,
    seller_name?: string,
    id?: number,
    status?: string
    prod_id?:string
    sale_invoice_no?:string
    invoice_no?:string  
    branch_code:string
}
export interface IstockApi {
    ext_code:string,
    erp_prod_id:string
}