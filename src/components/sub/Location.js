import { useEffect, useRef, useState } from "react";


function Location(){ 
  const frame = useRef(null);
  const {kakao} = window; 
  const container = useRef(null);
  const btnBranch = useRef(null);
  const [map, setMap] = useState(null);  
  const [index, setIndex] = useState(0); 
  const [toggle, setToggle] = useState(false);
  const info = [
    {
      title : "SEOUL",  
      latlng : new kakao.maps.LatLng(37.569907325261084,126.99291397832287),
      imgSrc : process.env.PUBLIC_URL+"/img/Marker.svg", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },  
    {
      title : "YONGIN", 
      latlng : new kakao.maps.LatLng(37.231568046617994,127.19959193691425),
      imgSrc : process.env.PUBLIC_URL+"/img/Marker.svg",
     
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    },
    {
      title : "BUSAN", 
      latlng : new kakao.maps.LatLng(35.15987975727686,129.16971691261583),
      imgSrc : process.env.PUBLIC_URL+"/img/Marker.svg", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}
    }
  ];

  const [mapInfo] = useState(info);

  useEffect(()=>{
    console.log('map');
    console.log(index);
    frame.current.classList.add('on');
    const options = { 
      center: mapInfo[index].latlng, 
      level: 3 
    }  
    const map = new kakao.maps.Map(container.current, options);
    setMap(map);
 
    new kakao.maps.Marker({
      map: map, 
      position: mapInfo[index].latlng, 
      title : mapInfo[index].title,
      image : new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
    });

    map.setCenter(mapInfo[index].latlng);   
  
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);  
    map.setZoomable(true); 
    map.setDraggable(true);

    for(const btn of btnBranch.current.children) btn.classList.remove('on');
    btnBranch.current.children[index].classList.add('on');
    
    
    const mapSet = ()=> map.setCenter(mapInfo[index].latlng);  
    window.addEventListener('resize',mapSet);
    
    return ()=>{
      window.removeEventListener('resize',mapSet);
      container.current.innerHTML='';
    } 
   
  },[index]); 

  return (
    <main className='location' ref={frame}>
      <div className="location__inner">
        <div className="location__top__txt">
            <h1>Location</h1>
        </div>
        
      
        <div id="map" ref={container}></div>

        <ul className="traffic">
          { 
            toggle ? 
              <li onClick={()=>{
                map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
                setToggle(!toggle);
              }}>TRAFFIC OFF</li>       
            :            
              <li onClick={()=>{           
                map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                setToggle(!toggle);
              }}>TRAFFIC ON</li>
          } 
        </ul>

        <ul className="branch" ref={btnBranch}> 
        {  
          mapInfo.map((data,index)=>{
            return  <li key={index} onClick={()=>setIndex(index)}>{data.title}</li>
          })          
        }  
        </ul>
      </div>
    </main>
  )
}

export default Location;
