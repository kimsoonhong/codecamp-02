import { useEffect } from "react";

export default function kakaomap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ac7229dd27b8430a65dbcbadfca5c2fa&&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(35.18350248075207, 128.99241069612935), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new kakao.maps.LatLng(
          35.18350248075207,
          128.99241069612935
        );

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
        });
      });
    };
  });

  return (
    <div>
      <div>ㅎㅎ</div>
      <div></div>
      <div></div>
      <div></div>{" "}
      <div
        id="map"
        style={{
          width: "500px",
          height: "400px",
          backgroundColor: "whitesmoke",
        }}
      ></div>
    </div>
  );
}
