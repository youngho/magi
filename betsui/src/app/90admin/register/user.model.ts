/**
 * 1. File name     : user.model.ts
 * 2. Discription   : 사용자 관리화면
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0901 : User Authorization
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class User {
    username: string;
    password: string;
    name: string;
    isAccountNonExpired: boolean;
    isAccountNonLocked: boolean;
    isCredentialsNonExpired: boolean;
    isEnabled: boolean;
    authorities: any[];
    authority: string;
}