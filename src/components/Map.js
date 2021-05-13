import React, { useState, useEffect } from "react";
import './Map.css';

//
const { kakao } = window;

const Map = () => {
  let map;
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.50388, 127.044488),
      level: 3,
    };

    // 지도 객체를 state로 관리
    map = new kakao.maps.Map(container, options);
  }, []);

  const addMarker = ( lat, lng ) => {
    // 마커를 생성합니다
    let markerPosition = new kakao.maps.LatLng(lat, lng);
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }

  const markerTest = () => {
    addMarker(37.50388, 127.044488);
    addMarker(37.50378, 127.044488);
    addMarker(37.50368, 127.044488);
  }
  return (
      <div>
        <div id="map"></div>
        <button onClick={markerTest}>marker test</button>
      </div>
  );
};

export default Map;
