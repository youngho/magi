/**
 * 1. File name     : BinDescription.module.ts
 * 2. Discription   : BIN 에 대한 설명을 관리한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
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