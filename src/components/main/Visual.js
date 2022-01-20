const path = process.env.PUBLIC_URL;


function Visual() {
    return (
        <figure id="visual">
            <img className="visual__img" alt="이미지" src={path+"/img/visual.jpeg"} />
            <h1 class="visual__txt01">MEHR ALS DU DIR VORSTELLEN KANNST</h1>
            <h2 class="visual__txt02">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est, blanditiis repudiandae at dolores sint earum aliquid quod! Ex, obcaecati dignissimos! Dignissimos, quaerat iure? Provident quae eius rem dolor eos!</h2>
           
        </figure>
        

    )

}
export default Visual;
