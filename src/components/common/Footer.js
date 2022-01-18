function Footer(){
    const path = process.env.PUBLIC_URL;
  
    return(
    <footer>
        <div className="footer__inner">
            <div className="footer__top">
                <h1><a href="#"><img src={path+"/img/f01.png"} /></a></h1>
                <div className="inner">

                <ul className="footer__menu">
                    <li>Department</li>
                    <li>Gallery</li>
                    <li>Youtube</li>
                    <li>Community</li>
                    <li>Location</li>
                    <li>Join</li>
                </ul>

                <ul className="footer__adress">
                    <li>VISIT US</li>
                    <li>React Portfolio</li>
                    <li>Hamburger Allee 249</li>
                    <li>D-98533 Berlin</li>
                    <li>Germany</li>
                    <li>+49 15277 89754</li>
                    <li><a href="#">mail@reactportfolio.com</a></li>
                </ul>
    
                <div className="footer__newsletter">
                <form>
                    <fieldset>
                    <legend className='h'>뉴스레터 이메일 입력 폼 양식</legend>
    
                    <table>
                        <caption className='h'>뉴스레터 이메일 입력</caption>
                        <tbody>
                        <tr>
                            <th scope='row'>
                            <label htmlFor="email">Newletter</label>
                            <p>Newsletter abonnieren</p>
                            </th>
                            <td>
                            <input 
                                type="text" 
                                id='email'
                                name='email'
                                placeholder='Email'         
                                />
                                <button>Los!</button>
                            </td>
                            </tr>
                        </tbody>       
                        </table>
                    </fieldset>
                    </form>
                    </div>
                    </div>
                </div>
                <div className="footer__under">
        
                    <div className="footer__under__left">
                    <p>Copyright © 2022 React Porfolio. Alle Rechte vorbehalten</p>
                    <p>React Portfolio sowie das Logo sind eingetragene Handelsmarken</p>
                    </div>
        
                    <div className="footer__under__right">
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
            </footer>
            )
        }


export default Footer;