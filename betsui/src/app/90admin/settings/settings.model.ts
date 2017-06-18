/**
 * 1. File name     : settings.model.ts
 * 2. Discription   : 사용자 설정화면
 * 3. writer        : yhkim     2017.06.18
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0902 : Setting
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
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