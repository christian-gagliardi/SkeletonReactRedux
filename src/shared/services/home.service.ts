import StoreInterface from '../interfaces/store/store.interface'

const mockData:any = [
  {
    "_id" : "5f5a4fa151853f001886a5c5",
    "location" : {
        "type" : "Point",
        "coordinates" : [ 
            11.71159, 
            42.67961
        ]
    },
    "description" : "",
    "phone" : "0564633006",
    "email" : "10042@pharmaround.it",
    "note" : "",
    "active" : true,
    "code" : "10042",
    "name" : "BRIGNALI DOTTOR  NEDO",
    "address" : "VIA DEL PORTICO, 1",
    "city" : "Sorano",
    "cap" : "58010",
    "__v" : 0,
    "isVirtual" : false,
    "whatsapp" : "",
    "doctor" : "",
    "pro" : false,
    "display_name" : "",
    "region" : "toscana",
    "whatsapp_prefix" : ""
  }
]

const fake_getDataFromServer = async (skip: number, limit: number) : Promise<StoreInterface[]> =>{
  return new Promise((resolve) =>
    setTimeout(() => resolve( mockData ), 500)
  );
}
  
export {
  fake_getDataFromServer
};
