import React, { useEffect } from "react";
import './Map.css';

//
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.50388, 127.044488),
      level: 3,
    };

    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    
  }, []);

  return (
    <div id="map"></div>
  );
};

export default Map;