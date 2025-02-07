



export interface Product {
               _id :string,
              name :string,
              _type:"product",
               slug :{
                _type:"slug"
                current:string,
               }
               description :string,
               feautres :string,
               price :number,
               image? :{
                asset:{
                  _ref: string,
                  _type:"image",

                }
               }
                
              tags : string,
               quantity: number,
               dimensions?: string,

}
