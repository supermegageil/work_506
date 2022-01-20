const path = process.env.PUBLIC_URL;

function Brand(){
    return(
    <div id="brand">
        <div className="brand__inner">
            < div className="brand__top__txt">
                <div className="brand__top__txt__right">          
                    <h1>BRAND STORY</h1>
                </div> 
            </ div>
        
        
        
            <div className="brand__wrap">
                <div className="brand__txt">
                    <i className="fas far fa-circle"></i>
                    <i className="fas far fa-circle"></i>
                    <i className="fas far fa-circle"></i>
                    <h2>LOREM IPSUM</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, iusto cum. Eum, illo obcaecati perferendis exercitationem vitae dolor dolore ut dolorem quas aliquam minus saepe totam blanditiis, dignissimos in praesentium ex quia quam voluptas recusandae delectus sed maxime reprehenderit. Perferendis.</p>
                        
                </div>

                <div className="brand__pics">
                    <article className="brand__pic1">
                        <img src={path+"/img/brand1.jpg"} alt="브랜드 이미지1"/>
                    </article>
                    <article className="brand__pic2">
                        <img src={path+"/img/brand2.jpg"} alt="브랜드 이미지2"/>
                    </article>
                    <article className="brand__pic3">
                        <img src={path+"/img/brand3.jpg"} alt="브랜드 이미지3"/>
                    </article>
                </div>
            </div>
        </div>
    </div>    

    )
}
export default Brand;