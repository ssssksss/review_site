import React, { useEffect } from "react";
const { naver } = window;

const NaverMapContainer = () => {

	useEffect(() => {
		var mapOptions = {
			center: new naver.maps.LatLng(37.3595704, 127.105399),
			zoom: 10
		};

		var map = new naver.maps.Map(document.getElementById('map'), mapOptions);

	})

	return (
		<>
			<div id="map" style={{ width: "100%", height: "400px" }}>
				123
			</div>
		</>
	);

}
export default NaverMapContainer;

