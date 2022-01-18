const path = process.env.PUBLIC_URL;
//<img className="visualImage" alt="이미지" src={path+"/img/arch27.jpeg"} />
//<img src={path+"/img/pic.jpeg"} />

function Department() {
    return (
        <div id="department">
            <div class="department__inner">
                <div class="department__wrap">
                    <article>
                        <div class="pic">
                            <img src={path+"/img/team.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>                
                </div>
            </div>
        </div>
    )
}

export default Department;
