/**
 *
 */
package kr.famos;

import kr.famos.com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;


/**
 * Created by yhkim on 2017-02-24.
 * WebSecurityConfigureAdapter는 기본적인 웹 인증에 대한 부분을 구현해놓은 클래스입니다. 해당 클래스를 상속 받은 뒤에 수정이 필요한 것만 override 해줍니다.
 */

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserService userService;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers("/scripts/**/*.{js}")
                .antMatchers("/bower_components/**")
                .antMatchers("/assets/**")
                .antMatchers("*.{ico}")
                .antMatchers("/**/*.{html}");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER)
                .and()
                .authorizeRequests()
                .antMatchers("/user/login").permitAll()
                .antMatchers("/user/insertRegister").permitAll()
                .antMatchers("/").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/user").hasAuthority("USER")
                //.antMatchers("/retireveLotYield").hasAuthority("ADMIN")
//                .antMatchers("/retrieveProgramRegister").hasAuthority("ADMIN")
//                .antMatchers("/retrieveProgramRegisterByKey").hasAuthority("ADMIN")
//                .antMatchers("/insertProgramRegister").hasAuthority("ADMIN")
//                .antMatchers("/retrieveRegister").hasAuthority("ADMIN")
                .antMatchers("/retrieveProgramRegister").permitAll()
                .antMatchers("/retrieveProgramRegisterByKey").permitAll()
                .antMatchers("/retrieveBinDescription").permitAll()
                .antMatchers("/retrieveTdbiBoardType").permitAll()
                .antMatchers("/retrieveTdbiBoardTypeByKey").permitAll()
                .antMatchers("/insertTdbiBoardType").permitAll()

                .antMatchers("/retrieveBinDescription").permitAll()
                .antMatchers("/retrieveBinDescriptionByKey").permitAll()
                .antMatchers("/insertBinDescription").permitAll()


                .antMatchers("/retrireveLotYield").permitAll()
                .antMatchers("/retrieveRegister").permitAll()
                .antMatchers("/insertProgramRegister").permitAll()
                .antMatchers("/retrieveNgBin").permitAll()
                .antMatchers("/retrieveNgBinJson").permitAll()
                .antMatchers("/retrieveNgBinJson2").permitAll()
                .antMatchers("/retrieveSingleDutMap").permitAll()
                .antMatchers("/retrieveCompoDutMap").permitAll()

                .antMatchers("/get-resources").permitAll()
                .antMatchers("/retrieveRawData").permitAll()
                .antMatchers("/retrieveRawDataByKey").permitAll()
                .antMatchers("/download/{type}").permitAll()


                .antMatchers("/retrieveProgramRevision").permitAll()

                .antMatchers("/retrieveYieldAbnormal").permitAll()
                .antMatchers("/retrieveTestLotCancel").permitAll()

                .anyRequest().authenticated()
                .and()
//               .formLogin()
//                    .and()
                .logout()
        ;
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(userService.passwordEncoder());


    }

    /**
     * authenticationManagerBean 메소드의 경우에는 SpringSecurity에서 사용되는 인증객체를 Bean으로 등록할 때 사용
     *
     * @return
     * @throws Exception
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public HttpSessionStrategy httpSessionStrategy() {
        return new HeaderHttpSessionStrategy();
    }

}


