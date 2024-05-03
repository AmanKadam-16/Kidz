export interface IAddSchoolNotice{
    ID: number
    ClassIds: string
    NoticeTitle: string
    NoticeDescription: string
    NoticeFileName: string
    NoticeFilePath? : string
    BinaryData : string
    NoticeDate: string
    ClassId?: number
    ClassName? : string
};

export interface IGetSchoolNoticeDetails{
    ID: number
};

