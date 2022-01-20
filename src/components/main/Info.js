import { useEffect, useRef } from "react";
const path = process.env.PUBLIC_URL;

function Info(){

  return (
    <div id="info">
        <div className="info__inner">
            < div className="info__top__txt">
                <div className="info__top__txt__left">          <h1>PROJECTS</h1>
                </div> 
                <div className="info__top__txt__right">
                <button>orem</button>
                <button>orem</button>
                </div>
            </ div>         
         
            
            <div className="info__wrap">        
                <article>
                    <div className="info__project01">
                        <div className="pic">
                            <img src={path+"/img/info1.jpeg"} />
                            
                        </div>
                    </div>
                    
                </article>
                <article>
                <div className="info__project02">
                        <div className="info__project__txt">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum eius iste obcaecati recusandae deleniti doloremque necessitatibus harum earum rem!</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="info__project03">
                        <div className="pic">
                            <img src={path+"/img/info3.jpeg"} />
                        </div>
                    </div>
                    
                </article>
                <article>
                <div className="info__project04">
                        <div className="pic">
                            <img src={path+"/img/info4.jpeg"} />
                        </div>
                    </div>
                    
                </article>
                
                <article>
                    <div className="info__project05">
                        < div className="pic">
                            <img src={path+"/img/info5.jpeg"} />
                        </div>
                    </div>                
                </article>
                <article>
                <div class="info__project06">
                        < div className="pic">
                            <img src={path+"/img/info6.jpeg"} />
                        </div>
                    </div> 
                </article>
                <article>
                    <div className="info__project07">
                        <div className="pic">
                            <img src={path+"/img/info7.jpeg"} />
                        </div>
                    </div>
                    
                </article>
                <article>
                    <div className="info__project08">
                        <div className="info__project__txt">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo nemo enim repudiandae necessitatibus suscipit ipsam saepe eaque dolorem eligendi.</p>
                        </div>
                    </div>                
                </article>               
            </div>

            
        </div>
    </div>
  )
}

export default Info;
