package pl.bb.broker.webapp.beans;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;
import pl.bb.broker.brokerdb.broker.entities.OffersEntity;
import pl.bb.broker.brokerdb.util.BrokerDBUtil;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.PhaseId;
import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;


/**
 * Created with IntelliJ IDEA.
 * User: BamBalooon
 * Date: 23.05.14
 * Time: 20:42
 * To change this template use File | Settings | File Templates.
 */

@ManagedBean
@ApplicationScoped
public class HelloBean implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name = "";

    public HelloBean() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHello() {
        if(name==null || name.length()==0) {
            return null;
        }
        return "Hello, "+name;
    }

    public StreamedContent getImage() throws IOException {
        FacesContext context = FacesContext.getCurrentInstance();

        if(context.getCurrentPhaseId() == PhaseId.RENDER_RESPONSE) {
            //rendering HTML - return stub StreamedContent to generate URL
            return new DefaultStreamedContent();
        }
        else {
            //requesting actual image
            OffersEntity offer = BrokerDBUtil.INSTANCE.getOffer(5);
            return new DefaultStreamedContent(new ByteArrayInputStream(offer.getImage()));
        }

    }

}
