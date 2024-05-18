export interface IAddFeesBody {
    ID: number,
    AcademicYearId? : number,
    FeeNameId? : number,
    AcademicYear? : string,
    Amount? : string,
    EndDate? : string,
    FeeName? : string,
    FeeType? : string,
    StudentId? : number,
    StudentName?: string,
    ClassName?: string,
    ClassId?: number,
    Date?: string

}

export interface IGetFeesDetailsBody {
    ID?: number,
    ClassId?: number,
    FeeNameId? : number,
    FeeType? : string
}
