/*global kakao*/

import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    componentDidMount(){    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        let map = new kakao.maps.Map(container, options);
    }
    render(){
        return(
            <div className="Map" id="map"></div>
        );
    }
}

export default Map;
