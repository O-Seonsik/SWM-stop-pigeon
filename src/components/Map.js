import React, { useState, useEffect } from "react";
import './Map.css';
import MarkerPosition from './data_analysis/point.json';
import GridPosition from './data_analysis/grid.json';

//
const { kakao } = window;

const Map = () => {
  let map;
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.503825, 127.044652),
      level: 3,
    };

    // 지도 객체를 state로 관리
    map = new kakao.maps.Map(container, options);
  }, []);



  const addMarker = ( lat, lng ) => {
    // 마커를 생성합니다
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }

  // 마커 테스트 코드
  const markerTest = () => {
    var markerData = JSON.stringify(MarkerPosition);
    markerData = JSON.parse(markerData);
    for(var i = 0; markerData[i]; i++) {
      addMarker(markerData[i]['x'], markerData[i]['y']);
    }
  }

  const addSquare = (grid) => {
    const sw = new kakao.maps.LatLng(grid.lat1, grid.lng1), // 사각형 영역의 남서쪽 좌표
        ne = new kakao.maps.LatLng(grid.lat2,  grid.lng2); // 사각형 영역의 북동쪽 좌표

    // 사각형을 구성하는 영역정보를 생성합니다
    // 사각형을 생성할 때 영역정보는 LatLngBounds 객체로 넘겨줘야 합니다
    const rectangleBounds = new kakao.maps.LatLngBounds(sw, ne);

    // 지도에 표시할 사각형을 생성합니다
    const rectangle = new kakao.maps.Rectangle({
      bounds: rectangleBounds, // 그려질 사각형의 영역정보입니다
      strokeWeight: 0, // 선의 두께입니다
      fillColor: '#FF0000', // 채우기 색깔입니다
      fillOpacity: 0.5 // 채우기 불투명도 입니다
    });

    // 지도에 사각형을 표시합니다
    rectangle.setMap(map);
  }

  // 그리드 테스트 코드
  const squareTest = () => {
    for(let i = 1; i <= 10000; i++){
      let num = 0.0001*i;
      addSquare({
        lat1: 37.504293+num,
        lng1: 127.043858+num,
        lat2: 37.503663+num,
        lng2: 127.045092+num
      })
    }
  }

  return (
      <div>
        <div id="map"></div>
        <button onClick={markerTest}>marker test</button>
        <button onClick={squareTest}>square test</button>
      </div>
  );
};

export default Map;