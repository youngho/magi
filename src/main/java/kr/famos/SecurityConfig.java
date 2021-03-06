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
                .antMatchers("/").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                //.antMatchers("/retrieveLotYield").hasAuthority("ADMIN")
//                .antMatchers("/retrieveProgramRegister").hasAuthority("ADMIN")
//                .antMatchers("/retrieveProgramRegisterByKey").hasAuthority("ADMIN")
//                .antMatchers("/insertProgramRegister").hasAuthority("ADMIN")
//                .antMatchers("/retrieveRegister").hasAuthority("ADMIN")
// BASIS INFORMATION
                .antMatchers("/retrieveProgramRegister").permitAll()
                .antMatchers("/retrieveProgramRegisterByKey").permitAll()
                .antMatchers("/insertProgramRegister").hasAuthority("ADMIN")

                .antMatchers("/retrieveTdbiBoardType").permitAll()
                .antMatchers("/retrieveTdbiBoardTypeByKey").permitAll()
                .antMatchers("/insertTdbiBoardType").permitAll()

                .antMatchers("/retrieveBinDescription").permitAll()
                .antMatchers("/retrieveBinDescriptionByKey").permitAll()
                .antMatchers("/insertBinDescription").permitAll()

                .antMatchers("/insertLcVersionRegister").permitAll()

                .antMatchers("/retrieveTesterIp").permitAll()

                .antMatchers("/retrieveBadBlock").permitAll()
                .antMatchers("/retrieveBadBlockByKey").permitAll()
// YIELD ANAYSIS
                .antMatchers("/retrieveLotYield").permitAll()
                .antMatchers("/retrieveNgBin").permitAll()
                .antMatchers("/retrieveNgBinJson").permitAll()
                .antMatchers("/retrieveNgBinJson2").permitAll()
// DUTMAP
                .antMatchers("/retrieveSingleDutMap").permitAll()
                .antMatchers("/retrieveCompoDutMap").permitAll()
                .antMatchers("/retrieveDutMapYield").permitAll()
// SBL ANALYSIS
                .antMatchers("/retrieveYieldAbnormal").permitAll()
                .antMatchers("/retrieveTestLotCancel").permitAll()
// TDBI ANALYSIS
                .antMatchers("/retrieveBoardCompositeMap").permitAll()
                .antMatchers("/retrieveBoardSerialMap").permitAll()
                .antMatchers("/retrieveBoardYield").permitAll()
                .antMatchers("/retrieveDataSummary").permitAll()
                .antMatchers("/retrieveSlotYield").permitAll()
                .antMatchers("/retrieveTdbiDc").permitAll()
                .antMatchers("/retrieveBoardCompositeSocketYield").permitAll()
// EFFICIENCY ANAYSIS
                .antMatchers("/retrieveTestEfficiency").permitAll()
                .antMatchers("/retrieveUsingLot").permitAll()
                .antMatchers("/retrievePieData").permitAll()
                .antMatchers("/retrieveTestTime").permitAll()
// RAW DATA
                .antMatchers("/get-resources").permitAll()
                .antMatchers("/retrieveRawData").permitAll()
                .antMatchers("/retrieveRawDataByKey").permitAll()
                .antMatchers("/download/{type}").permitAll()
// HISTORY
                .antMatchers("/retrieveProgramRevision").permitAll()
                .antMatchers("/retrieveMesTrackInOut").permitAll()
                .antMatchers("/retrieveComUserUsage").permitAll()
                .antMatchers("/insertComUserUsage").permitAll()
                .antMatchers("/retrieveLcRevision").permitAll()
                .antMatchers("/retrieveChipId").permitAll()
// ADMINISTRATION
                .antMatchers("/user").hasAuthority("USER")
                .antMatchers("/user/retrieveRegister").permitAll()
                .antMatchers("/admin/register").permitAll()
                .antMatchers("/user/login").permitAll()
                .antMatchers("/user/insertRegister").permitAll()
                .antMatchers("/user/updateRegister").permitAll()
                .antMatchers("/retrieveSettings").permitAll()
                .antMatchers("/retrieveSettingsByKey").permitAll()
                .antMatchers("/updateSettings").permitAll()

                .antMatchers("/retrieveNavigation").permitAll()
// Dashboard
                .antMatchers("/retrieveDashboard").permitAll()
                .antMatchers("/retrieveChartDetail").permitAll()

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


