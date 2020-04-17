export class TopicData{
    topicId:number;
    topicName:string;
    desc: string;

    constructor(topicId:number , topicName:string , desc:string){
        this.topicId = topicId;
        this.topicName = topicName;
        this.desc = desc;

    }
}