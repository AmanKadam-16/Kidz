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
    ClassName?: string,
    ClassId?: number,
    Date?: string

}

export interface IGetFeesDetailsBody {
    ID: number
}
