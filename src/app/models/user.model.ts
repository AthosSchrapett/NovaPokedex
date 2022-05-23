import { uuid as Guid } from "uuidv4";

export class User {
  Id = Guid;
  userName: string = "";
  Password: string = "";
  CreatedAt: Date | null = null;
}
