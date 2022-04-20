export default interface ShopInterface {
  _id?: string;
  __v?: number;
  location: {
    type: string;
    coordinates: number[];
  };
  description: string;
  phone: string;
  email: string;
  note: string;
  active: Boolean;
  code: string;
  name: string;
  address: string;
  city: string;
  cap: string;
  whatsapp: string;
  doctor: string;
  display_name: string;
  region: string;
  whatsapp_prefix: string;
  isVirtual: Boolean;
  pro: Boolean;
}
