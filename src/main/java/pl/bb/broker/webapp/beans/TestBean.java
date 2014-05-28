package pl.bb.broker.webapp.beans;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jboss.crypto.CryptoUtil;
import pl.bb.broker.brokerdb.broker.entities.UsersEntity;
import pl.bb.broker.brokerdb.util.HibernateUtil;
import pl.bb.broker.security.settings.SecuritySettings;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.OneToMany;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

/**
 * Created with IntelliJ IDEA.
 * User: BamBalooon
 * Date: 25.05.14
 * Time: 20:36
 * To change this template use File | Settings | File Templates.
 */

@ManagedBean
@RequestScoped
public class TestBean {

    public String login() throws ServletException{
        FacesContext context = FacesContext.getCurrentInstance();
        HttpServletRequest request = (HttpServletRequest) context.getExternalContext().getRequest();

//        request.login("seba", "Qwe12#");
        String pwd1 = CryptoUtil.createPasswordHash(SecuritySettings.hashAlgorithm,
                SecuritySettings.hashEncoding,
                SecuritySettings.hashCharset,
                "bambalooon",
                "balon91");

        String pwd2 = CryptoUtil.createPasswordHash("SHA-256", "BASE64", "UTF-8", "seba", "Qwe12#");

        FacesMessage msg = new FacesMessage(FacesMessage.SEVERITY_INFO, pwd1+":"+pwd2, null);
        context.addMessage(null, msg);
        return null;


    }

}
