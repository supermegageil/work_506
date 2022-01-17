import { useEffect, useRef } from "react";
const path = process.env.PUBLIC_URL;

function Info(){

  return (
   <div id="info">
      <div className="info__inner">
        <h1>LOREM IPSUM</h1>
        <div class="info__wrap">
            <article>
                <div class="pic">
                <img src={path+"/img/pic.jpeg"} />
                </div>
                <h2>Lorem, ipsum.</h2>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2>Lorem, ipsum.</h2>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2>Lorem, ipsum.</h2>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2>Lorem, ipsum.</h2>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Info;