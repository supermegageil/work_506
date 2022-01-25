
import { useEffect, useRef } from "react";
const path = process.env.PUBLIC_URL;

function Department() {
    const frame = useRef(null);

    useEffect(()=>{
        frame.current.classList.add('on');
    },[])

    return (
        <main id="department"  ref={frame}>
            <div className="department__inner">
                <div className="department__top__txt">
                    <h1>Department</h1>
                </div>

                
                <div className="department__content">
                    <div className="department__content__txt">
                    <i className="fas far fa-circle"></i>
                    <i className="fas far fa-circle"></i>
                    <i className="fas far fa-circle"></i>
                    <h2>OUR EXPERT TEAM</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, assumenda consectetur autem officiis cumque illo incidunt eos magni suscipit molestias? Magnam vero quibusdam, quas, rem similique vel error eius deleniti fuga ad commodi eum, dolor sint recusandae! Officia, odio voluptates. Minima soluta sapiente ipsa quia exercitationem. Sunt nobis repellendus neque!</p>
                        
                    </div>

                    <div className="department__content__pics">
                        <article className="department__content__pic1">
                            <img src={path+"/img/department__content1.jpg"} alt="디파트먼트 컨텐트 이미지1"/>
                        </article>
                        <article className="department__content__pic2">
                            
                        </article>
                        <article className="department__content__pic3">
                            <img src={path+"/img/department__content3.jpg"} alt="디파트먼트 컨텐트 이미지3"/>
                            </article>
                            <article className="department__content__pic4">
                                <div className="department__content__pic4__txt">
                                    
                                    <p>reprehenderit animi quod atque nesciunt quas deserunt aperiam placeat ullam esse, quos, quam necessitatibus! Suscipit quia veniam repellat libero labore repellendus sapiente sunt voluptate tenetur molestias aliquid non, quae laborum a voluptatum iure aperiam accusamus eos inventore illum, ad voluptatem dicta nesciunt dignissimos. Iste, hic placeat minus modi, impedit molestias provident maiores iusto facere reprehenderit debitis dolore voluptates pariatur! Necessitatibus cupiditate nam nulla error odit aliquid veniam sunt earum eos. Quas quidem, quisquam harum, corrupti porro animi quibusdam, eum voluptatum fugiat vel quos quam. Saepe quas cupiditate debitis, recusandae aspernatur quidem explicabo maiores. Libero, minima. Hic dolores deserunt sunt quaerat inventore id magnam cupiditate, repellat aut consequuntur ad animi perspiciatis. Facere, consequatur culpa ipsum quidem repellendus magnam autem hic!
                                    </p>
                                </div>
                        </article>
                        <article className="department__content__pic5">
                            <img src={path+"/img/department__content5.jpg"} alt="디파트먼트 컨텐트 이미지5"/>
                        </article>
                        
                </div>
                <div className="department__wrap">
                        <div div className="department__members">
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department1.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Max Herrmann</h3>
                                    <p> Architect</p>
                                </div>
                            </article>
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department2.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Thomas Georg Till</h3>
                                    <p>CEO</p>
                                </div>
                            </article>
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department3.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Siegfried Erfolg</h3>
                                    <p>CEO, Architect</p>
                                </div>
                            </article>
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department4.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Heinrich Hansen</h3>
                                    <p>Team leader, Maketing</p>
                                </div>
                            </article>
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department5.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Susanne Schwarz</h3>
                                    <p>Manager, Maketing</p>
                                </div>
                            </article>
                            <article>
                                <div className="department__pic">
                                    <img src={path+"/img/department6.jpeg"} />
                                </div>
                                <div className="department__description">
                                    <h3>Giesela Mauer</h3>
                                    <p>Artist</p>
                                </div>
                            </article>
                        </div>
                </div>
                </div>
            </div>
        </main>
    )
}

export default Department;
