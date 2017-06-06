/**
 * Created by yhkim on 2017-02-17.
 */
export class BadBlock {
    lotId: string;
    cid: string;
    wf: string;
    x: string;
    y: string;
    badCnt: string;

    static fromJSON(json: any): BadBlock {
        let object = Object.create(BadBlock.prototype);
        Object.assign(object, json);
        return object;
    }
}