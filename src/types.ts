export type category = {
    name:string
    user_id:number 
    category_id: number 
}

export type TutorialLinks = {
    id: number
    placeHolder:string
}

export type product = {
    id: number 
    user_id:number
    category_id:number

    name:string 
    category:string
    
    color:string
    brand:string
    model:string 
    manufacturer:string

    img:string 
    
    description:string  
    
    purchased_in:Date
    last_change:Date
    validity:Date 
    
    price: number
    length:number   
    quantity:string  
    
}

export type DateInformations = {
    img: string,
    DateTitle:string,
    dateInformation:string
}

export type ImageInfo = {
    id: number
    src:string
    alt:string
}

export type CreatorSocialLinks = {
    href: string
    img:string
    alt:string
}[];


export type productInfoReportPage = {
    product: string
    numeric: string | number
  }
  