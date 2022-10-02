
export interface IWarehouse {
    code: string
    name: string
    supplier_name:string
    supplier_code:string
    ext_warehouse_code: string
    inv_profile: string
    description: string
    fulfilment_type: string
    latlng: string
    plus_code: string
    location_link: string
    address1: string
    address2: string
    address3: string
    pincode: string
    city: string
    state: string
    country: string
    location_type: string
    attributes: string
    regional_zone: string,
    is_ret_order_handled: boolean
    isActive: boolean
    courier_fullfillment_method: string
    fulfillment_cut_off: string
    geofencing_coordinates: string
    active_days: string
    active_hours_and_days: string
    gst_number: string
    tan_number: string
    pan_number: string
    cst_number: string
    vat_number: string
    primary_contact_name: string
    primary_contact_email: string
    primary_contact_mobile: string
    escalations_contact_name: string
    escalations_contact_email: string
    escalations_contact_mobile: string
}