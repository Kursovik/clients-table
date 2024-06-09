export interface IClients {
  users: Array<IUsers>;
}
export interface IUsers {
  name: string;
  surname: string;
  email: string;
  phone: string;
  id: number;
}
