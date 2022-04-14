export default interface ShopInterface {
  _id?: String;
  __v?: Number;
  location: {
    type: String;
    coordinates: Number[];
  };
  description: String;
  phone: String;
  email: String;
  note: String;
  active: Boolean;
  code: String;
  name: String;
  address: String;
  city: String;
  cap: String;
  whatsapp: String;
  doctor: String;
  display_name: String;
  region: String;
  whatsapp_prefix: String;
  isVirtual: Boolean;
  pro: Boolean;
}
