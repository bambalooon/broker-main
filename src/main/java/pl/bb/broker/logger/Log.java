package pl.bb.broker.logger;

import org.apache.log4j.Logger;

/**
 * Created with IntelliJ IDEA.
 * User: BamBalooon
 * Date: 30.05.14
 * Time: 15:45
 * To change this template use File | Settings | File Templates.
 */
public class Log {
    public static final Logger logger = Logger.getLogger(Log.class);
    static {
        logger.info("Logger initialized!");
    }
}
