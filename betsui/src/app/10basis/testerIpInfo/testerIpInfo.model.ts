/**
 * Created by yhkim on 2017-02-17.
 */
export class TesterIpInfo {
    testerNumber: string;
    testerIp: string;

    static fromJSON(json: any): TesterIpInfo {
        let object = Object.create(TesterIpInfo.prototype);
        Object.assign(object, json);
        return object;
    }
}