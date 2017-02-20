/**
 * Created by yhkim on 2017-02-17.
 */
export class retrieveLastTableCond {
    operator: string;
    partnumber : string;
    // title: string;
    // body: string;
    // sysDateEnd: string;
    constructor(operator,partnumber/*,title,body*/){
        this.operator = operator;
        this.partnumber = partnumber;
        // this.title = title;
        // this.body = body;
    }
}