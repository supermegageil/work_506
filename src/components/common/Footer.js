function Footer(){
    const path = process.env.PUBLIC_URL;
    
    return(
    <footer>
        <div className="footer__inner">
            <div className="footer__top">
                <h1><a href="#"><i class="fas fa-mountain"></i></a>Lorem ipsum dolor sit amet.</h1>
                <div className="footer__top__inner">

                <ul className="footer__menu">
                    <li>Menu</li>
                    <li>Department</li>
                    <li>Gallery</li>
                    <li>Youtube</li>
                    <li>Community</li>
                    <li>Location</li>
                    <li>Join</li>
                </ul>

                <ul className="footer__address">
                    <li>Address</li>
                    <li>React Portfolio</li>
                    <li>Hamburger Allee 249</li>
                    <li>D-98533 Berlin</li>
                    <li>Germany</li>
                    <li>+49 15277 89754</li>
                    <li>mail@reactportfolio.com</li>
                </ul>
                </div>

                <div className="footer__bottom">
                    <div className="footer__bottom__left">
                    <p>Copyright © 2022 React Porfolio. Alle Rechte vorbehalten</p>
                    <p>React Portfolio sowie das Logo sind eingetragene Handelsmarken</p>
                    </div>
        
                    <div className="footer__bottom__right">
                    <ul className="footer__sns">
                        <li><i className="fab fa-facebookr"></i></li>
                        <li><i className="fab fa-pinterest"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
    


export default Footer;