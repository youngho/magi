/**
 * Created by yhkim on 2017-02-17.
 */
export class Setting {
    betsKey: string;
    betsValue: string;
    betsKeyDesc: string;
    settingUser: string;

    static fromJSON(json: any): Setting {
        let object = Object.create(Setting.prototype);
        Object.assign(object, json);
        return object;
    }
}