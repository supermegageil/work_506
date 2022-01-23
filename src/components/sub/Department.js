
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

                <div className="department__wrap">
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department1.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department2.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department3.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department4.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department5.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                    <article>
                        <div className="department__pic">
                            <img src={path+"/img/department6.jpeg"} />
                        </div>
                        <div className="department__description">
                            <h3>Max Mustermann</h3>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam sint facere sequi quos! Ad minima provident consequatur officia. Quis."</p>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Department;
