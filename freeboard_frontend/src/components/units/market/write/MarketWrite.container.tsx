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
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IMarketWriteUIProps } from "./MarketWrite.types";
declare const window: typeof globalThis & {
  kakao: any;
};

const marketWrite = (props: IMarketWriteUIProps) => {
  const [files, setFiles] = useState([]);
  // const [upDateFiles, setUpDateFiles] = useState();
  const [sendImg, setSendImg] = useState(props.imgData);

  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSubmit),
    defaultValues: {},
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [address, setAddress] = useState(
    props.data?.fetchUseditem.useditemAddress.address || ""
  );
  const [addressDetail, setAddressDetail] = useState(
    props.data?.fetchUseditem.useditemAddress.addressDetail || ""
  );

  const onChangeFile = (file: any) => {
    setFiles(file);
  };

  async function onSubmit(data: any) {
    if (!files.length) {
      Modal.error({ content: "이미지를 최소 1개 이상 첨부해주세요." });
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
              address: data.address,
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

  async function onClickUpdate(data: any) {
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
          updateUseditemInput: {
            ...rest,
            images: [...sendImg, ...images],
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
          useditemId: router.query.useditemId,
        },
      });

      Modal.info({ content: "수정되었습니다." });
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  useEffect(() => {
    if (props.data) {
      // @ts-ignore
      setValue("name", props.data?.fetchUseditem.name);
      // @ts-ignore
      setValue("remarks", props.data?.fetchUseditem.remarks);
      // @ts-ignore
      setValue("contents", props.data?.fetchUseditem.contents);
      // @ts-ignore
      setValue("price", props.data?.fetchUseditem.price);
      // @ts-ignore
      setValue("tags", props.data?.fetchUseditem.tags);
      // @ts-ignore
      setValue("address", props.data?.fetchUseditem.useditemAddress.address);
      // @ts-ignore
      setValue(
        "addressDetail",
        props.data?.fetchUseditem.useditemAddress.addressDetail
      );
    }

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
            35.18350248075207,
            128.99241069612935
          ), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          35.18350248075207,
          128.99241069612935
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress.address || address,
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
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${
                  !addressDetail
                    ? props.data?.fetchUseditem.useditemAddress.addressDetail ||
                      "상세주소를 입력해주세요"
                    : addressDetail
                }</div>`,
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
  }, [props.data]);

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    // @ts-ignore
    setValue("address", data.address);
    // @ts-ignore
    trigger("address");
    setIsOpen(false);
  }

  function onCancel() {
    setIsOpen(false);
  }
  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail((event.target as any).value);

    // setValue("AddressDetail", data.AddressDetail);
    // trigger("AddressDetail");
  }

  function onChangeAddress(event: ChangeEvent) {
    setAddress((event.target as any).value);
  }

  return (
    <div>
      <MarketWriteUI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
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
        formState={formState}
        setSendImg={setSendImg}
        sendImg={sendImg}
        setFiles={setFiles}
        files={files}
        onChangeFile={onChangeFile}
      />
    </div>
  );
};

export default withAuth(marketWrite);
