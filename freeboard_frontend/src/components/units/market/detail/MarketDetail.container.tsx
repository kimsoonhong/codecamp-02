import MarketDetailUI from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  TOGGIE_PICK,
  DELETE_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION,
} from "./MarketDetail.queries";
import withAuth from "../../../commons/withAuth";
import { useEffect, useState } from "react";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};
const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION
  );
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [toggleUseditemPick] = useMutation(TOGGIE_PICK);
  const [isSetItem, setIsSetItem] = useState(true);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMoveToList() {
    router.push("/market");
  }

  const onClickBasket = (basketData: any) => () => {
    setIsSetItem(false);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    let isExists = false;

    baskets.forEach((data: any) => {
      if (data.fetchUseditem._id === basketData.fetchUseditem._id)
        isExists = true;
    });
    if (isExists) return;

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickDeleteBasket = (basketData: any) => () => {
    setIsSetItem(true);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    baskets.pop();

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  function onClickMoveToEdit() {
    router.push(`/market/${router.query.useditemId}/edit`);
  }

  const onclickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ac7229dd27b8430a65dbcbadfca5c2fa&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${data?.fetchUseditem.useditemAddress?.addressDetail}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
        marker.setMap(map);
      });
    };
  });

  async function onClickDeletItem() {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.useditemId,
        },
      });
      router.push("/market");
      Modal.info({ content: "삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onclickTransaction() {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });

      Modal.info({ content: "구매완료 하였습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickBasket={onClickBasket}
      onClickDeleteBasket={onClickDeleteBasket}
      onClickDeletItem={onClickDeletItem}
      isSetItem={isSetItem}
      onclickPick={onclickPick}
      userData={userData}
      onclickTransaction={onclickTransaction}
    />
  );
};

export default withAuth(BoardDetail);
