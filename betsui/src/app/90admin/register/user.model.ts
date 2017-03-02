/**
 * Created by yhkim on 2017-02-17.
 */
export class User {
    username: string;
    password: string;
    name: string;
    isAccountNonExpired: boolean;
    isAccountNonLocked: boolean;
    isCredentialsNonExpired: boolean;
    isEnabled: boolean;
    authorities: string;
}