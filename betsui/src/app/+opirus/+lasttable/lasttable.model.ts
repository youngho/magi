/**
 * Created by yhkim on 2017-02-17.
 */
export class LastTable {
    operator: string;
    sysDate: string;
    tester: string;
    partnumber: string;
    process: string;
    mainPgm: string;
    pgmcnt: string;
    subPgm: string;
    global: string;
    constructor(operator, sysDate){
        this.operator = operator;
        this.sysDate = sysDate;
    }
}