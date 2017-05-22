/**
 * Created by yhkim on 2017-02-17.
 */
export class ProgramRegister {
    testerModel: string;
    processCode: string;
    partNumber: string;
    mainProgramName: string;
    grade: string;
    fab: string;
    firmwareName: string;
    firmwareVersion: string;
    functionKey: string;
    temperature: string;
    temperatureLimit: string;
    sblYieldLimit: string;
    sblSubBinaNumber: string;
    sblSubBinaLimit: string;
    sblSubBinaCount: string;
    sblSubBinbNumber: string;
    sblSubBinbLimit: string;
    sblSubBinbCount: string;
    sblBin9Counter: string;
    productName: string;
    customer: string;
    packageType: string;
    programVersion: string;
    testerOsVersion: string;
    para: string;
    dutMap: string;
    passBinSelection: string;
    firmwareDirectory: string;
    createUser: string;
    createDate: string;
    modifyUser: string;
    modifyDate: string;
    sblBin9Limit: string;
    sblBin8Limit: string;
    retestBinSelection: string;

    createDateStart: string;
    createDateEnd: string;

    functionKey1: boolean;
    functionKey2: boolean;
    functionKey3: boolean;
    functionKey4: boolean;
    functionKey5: boolean;
    functionKey6: boolean;
    functionKey7: boolean;
    functionKey8: boolean;
    functionKey9: boolean;
    functionKey10: boolean;
    functionKey11: boolean;
    functionKey12: boolean;
    functionKey13: boolean;
    functionKey14: boolean;
    functionKey15: boolean;
    functionKey16: boolean;

    passBinSelection1: boolean;
    passBinSelection2: boolean;
    passBinSelection3: boolean;
    passBinSelection4: boolean;
    passBinSelection5: boolean;
    passBinSelection6: boolean;
    passBinSelection7: boolean;
    passBinSelection8: boolean;

    retestBinSelection1: boolean;
    retestBinSelection2: boolean;
    retestBinSelection3: boolean;
    retestBinSelection4: boolean;
    retestBinSelection5: boolean;
    retestBinSelection6: boolean;
    retestBinSelection7: boolean;
    retestBinSelection8: boolean;
    
    static fromJSON(json: any): ProgramRegister {
        let object = Object.create(ProgramRegister.prototype);
        Object.assign(object, json);
        return object;
    }
}