export interface IAddFollowUpBody {
    ID:number,
    StudentName:string ,
    CallStatus:string,
    EmailId:string ,
    FatherName:string ,
    PhoneNo:string ,
    MotherName:string ,
    PhoneNo2:string ,
    ClassName:string ,
    UserId:number,
    Birthdate:string ,
    Age:number,
    SocietyName:string ,
    Reminder:string, 
    Comment:string,
    StudentId:number,
    Status:string,
    StudentAddress:string ,
    FollowUpCount:number,
    StatusId:number,
    FollowUpDate?:string 
}
export interface IGetFollowUpDetailsBody {
    ID: number
}