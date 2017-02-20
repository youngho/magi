/**
 * Created by yhkim on 2017-02-17.
 */
export class retrieveLastTableCond {
    userId: string;
    id : string;
    title: string;
    body: string;
    // sysDateEnd: string;
    constructor(userId,id,title,body){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}