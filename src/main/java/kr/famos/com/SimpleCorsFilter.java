/**
 * Filter는 스프링에서 제공하는 기능은 아니고 Servlet에서 정의한 명세입니다. 이를 @Component로 정의해서 Bean으로 등록해줍니다.
 * 허용되는 Origin(도메인)과 메소드 방식, Header를 정의해서 리턴해줍니다. 위와 같은 코드를 작성함으로써 모든 도메인에 모든 요청을 받을 수 있게 해줍니다.
 * 출처: http://cusonar.tistory.com/17 [CU SONAR]
 */
package kr.famos.com;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by yhkim on 2017-03-01.
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SimpleCorsFilter implements Filter {

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-auth-token, content-type");

        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {}

    public void destroy() {}

}
