

export class CatagoryData{
    titleId:number;
    topicId:number;
    titleName:string;
    topicName:string
    catagorystatus:string;
    titleDesc:string;
    createdBy:string;
    createdDate:Date;
    lastUpdated:Date;
    reviewrsNtid:string;


    constructor(titleId: number , topicId:number, titleName: string, topicName:string , catagorystatus:string,  titleDesc: string , createdBy: string , createdDate: Date , lastUpdated: Date , reviewrsNtid:string){
        this.titleId = titleId;
        this.topicId = topicId
        this.titleName = titleName;
        this.topicName = topicName;
        this.catagorystatus =  catagorystatus;
        this.titleDesc = titleDesc;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastUpdated = lastUpdated;
        this.reviewrsNtid = reviewrsNtid;
    }
}