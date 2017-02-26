package kr.famos;

import kr.famos.com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


/**
 * Created by yhkim on 2017-02-24.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired UserService userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//               .csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/user/login").permitAll()
//                .antMatchers("/user").hasAuthority("USER")
//                .antMatchers("/admin").hasAuthority("ADMIN")
//                .anyRequest().authenticated()
//                .and()
////               .formLogin()
////                    .and()
//                .logout()
//        ;

    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService);
               // .passwordEncoder(userService.passwordEncoder());

    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


}


