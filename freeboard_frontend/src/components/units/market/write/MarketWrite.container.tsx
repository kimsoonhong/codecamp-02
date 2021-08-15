import MarketWriteUI from "./MarketWrite.presenter";
import withAuth from "../../../commons/withAuth";

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
  UPDATE_USED_ITEM,
} from "./MarketWrite.queries";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSubmit } from "./MarketWrite.validation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const marketWrite = (props) => {
  const [files, setFiles] = useState([]);
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [sendImg, setSendImg] = useState([]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] =
    useState("상세주소를 입력해주세요.");

  console.log(files, "마켓 컨테이너");

  const onChangeFile = (file) => {
    setFiles(file);
  };

  async function onSubmit(data) {
    console.log("등록하기입니다.", data);

    if (!files.length) {
      alert("이미지를 최소 1개 이상 넣어주세요");
      return;
    }
    const resultFiles = await Promise.all(
      files.map((data) => {
        return uploadfile({ variables: { file: data } });
      })
    );
    const images = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });
    const { address, addressDetail, ...rest } = data;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...rest,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });

      Modal.info({ content: "등록되었습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
      // router.push(`/market/`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  // console.log(fetchImg, "**^^");
  // /
  // /
  // /

  // useEffect(() => {
  //   if (props.data?.fetchUseditem?.images?.length)
  //     setFetchImg(
  //       [props.data?.fetchUseditem.images].map(
  //         (data) => `https://storage.googleapis.com/${data}`
  //       )
  //     );
  // }, [props.data?.fetchUseditem.images]);
  // /
  // /
  // /

  async function onClickUpdate(data) {
    console.log("수정하기입니다.", data);

    const resultFiles = await Promise.all(
      files.map((data) => {
        return uploadfile({ variables: { file: data } });
      })
    );
    const images = resultFiles.map((data) => {
      return data.data.uploadFile.url;
    });

    const { address, addressDetail, ...rest } = data;

    try {
      const result = await updateUseditem({
        variables: {
          createUseditemInput: {
            ...rest,
            images: images,
          },
        },
      });
      Modal.info({ content: "수정되었습니다." });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ac7229dd27b8430a65dbcbadfca5c2fa&libraries=services&autoload=false";
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

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${addressDetail}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
        marker.setMap(map);
      });
    };
  });

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setIsOpen(false);
  }

  function onCancel() {
    setIsOpen(false);
  }
  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onChangeAddress(event) {
    setAddress(event.target.value);
    setValue("Address", event.target.value);
    trigger("Address");
  }

  return (
    <div>
      <MarketWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
        setSendImg={setSendImg}
        setFiles={setFiles}
        data={props.data}
        isEdit={props.isEdit}
        onClickUpdate={onClickUpdate}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeAddressDetail={onChangeAddressDetail}
        onCancel={onCancel}
        isOpen={isOpen}
        address={address}
        addressDetail={addressDetail}
        onChangeAddress={onChangeAddress}
        imgData={props.imgData}
        onChangeFile={onChangeFile}
      />
    </div>
  );
};

export default withAuth(marketWrite);
