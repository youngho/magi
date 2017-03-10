/**
 * Created by yhkim on 2017-02-17.
 */
export class TdbiBoardType {
    boardTypeNo: string;
    xSocketQty: string;
    ySocketQty: string;

    static fromJSON(json: any): TdbiBoardType {
        let object = Object.create(TdbiBoardType.prototype);
        Object.assign(object, json);
        return object;
    }
}