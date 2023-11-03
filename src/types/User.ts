export class User {
    id?: number;
    FirstName: string="";
    LastName:string="";
    Birthday!: Date;
    Bio: string="";
    Email: string="";
    constructor(id: number | undefined, FirstName: string, LastName: string, Birthday: Date, Bio: string, Email:string) {
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Birthday = Birthday;
        this.Bio = Bio;
        this.Email = Email;
      }
}
