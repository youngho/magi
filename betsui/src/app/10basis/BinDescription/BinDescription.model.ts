/**
 * Created by yhkim on 2017-02-17.
 */
export class BinDescription {
    partNumber: string;
    mainProgramName: string;
    processCode: string;
    testerModel: string;
    itemName: string;
    mainBin: string;
    subBin: string;
    ngBin: string;

    static fromJSON(json: any): BinDescription {
        let object = Object.create(BinDescription.prototype);
        Object.assign(object, json);
        return object;
    }
}