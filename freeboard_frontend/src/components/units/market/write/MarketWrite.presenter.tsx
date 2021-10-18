import Input100 from "../../../commons/Inputs/Input_width_100";
import InputTextarea from "../../../commons/Inputs/Input_Textarea_01";
import Button01 from "../../../commons/Buttons/Button-Middle-01";
import ImgFileUploads from "../../../../components/commons/ImgFile_Uploads01/Uploads01.container";
import SmallButton from "../../../commons/Buttons/Button-small-01";
import Modal from "antd/lib/modal/Modal";
import DaumPostcode from "react-daum-postcode";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";
import {
  Wrapper,
  Header,
  HeaderText,
  Body,
  Label,
  MapWrapper,
  MapPositionWrapper,
  MapPosition,
  MapRightWrapper,
  AddressWrapper,
  ImgWrapper,
  ButtonWrapper,
} from "./MarketWrite.syles";

export default function marketWriteUI(props: any) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true} onCancel={props.onCancel}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onSubmit
        )}
        style={{ display: "flex" }}
      >
        <Wrapper>
          <Header>
            <HeaderText>
              {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
            </HeaderText>
          </Header>
          <Body>
            <Input100
              InputName="상품명"
              type="text"
              register={{ ...props.register("name") }}
              errorMessage={props.errors.name?.message}
              // defaultValue={props.data?.fetchUseditem.name}
            ></Input100>
            <Input100
              InputName="한줄요약"
              type="text"
              register={{ ...props.register("remarks") }}
              errorMessage={props.errors.remarks?.message}
              // defaultValue={props.data?.fetchUseditem.remarks}
            ></Input100>
            <InputTextarea
              InputName="상품설명"
              type="text"
              register={{ ...props.register("contents") }}
              errorMessage={props.errors.contents?.message}
              // defaultValue={props.data?.fetchUseditem.contents}
              onChange={props.onChangeContents}
            ></InputTextarea>
            <Input100
              InputName="판매가격"
              type="text"
              register={{ ...props.register("price") }}
              errorMessage={props.errors.price?.message}
              // defaultValue={props.data?.fetchUseditem.price}
            ></Input100>

            <Input100
              InputName="태그입력"
              type="text"
              register={{ ...props.register("tags") }}
              onChange={props.onChangeTag}
              errorMessage={props.errors.tags?.message}
              // placeholder="스페이스키를 활용하여 태그를 입력해 보세요."
              // onKeyDown={props.onKeyDown}
              // value={props.tagValue}
              // defaultValue={props.data?.fetchUseditem.tags}
            ></Input100>
            <MapWrapper>
              <MapPositionWrapper>
                <Label>거래위치</Label>
                <MapPosition id="map"></MapPosition>
              </MapPositionWrapper>
              <MapRightWrapper>
                <AddressWrapper>
                  <Input100
                    InputName="주소"
                    type="text"
                    placeholder={"주소를 검색해 주세요."}
                    register={{ ...props.register("address") }}
                    readOnly
                    defaultValue={props.data?.fetchUseditem.address || ""}
                    // onChange={props.onChangeAddress}
                    errorMessage={props.errors.address?.message}
                  ></Input100>

                  <Input100
                    type="text"
                    placeholder={"상세주소를 입력해주세요."}
                    register={{ ...props.register("addressDetail") }}
                    errorMessage={props.errors.addressDetail?.message}
                    onChange={props.onChangeAddressDetail}
                    value={props.AddressDetail}
                    defaultValue={
                      props.data?.fetchUseditem.addressDetail || " "
                    }
                  ></Input100>
                  <SmallButton
                    buttonName="주소검색"
                    type="button"
                    onClick={props.onClickAddressSearch}
                  ></SmallButton>
                </AddressWrapper>
              </MapRightWrapper>
            </MapWrapper>
            <Label>사진첨부</Label>
            <ImgWrapper>
              {/* <ImgUpload>제품사진</ImgUpload>
            <ImgUpload>제품사진</ImgUpload> */}
              <ImgFileUploads
                // @ts-ignore
                width={180}
                height={180}
                number={3}
                files={props.files}
                setFiles={props.setFiles}
                sendImg={props.sendImg}
                setSendImg={props.setSendImg}
                onChangeFile={props.onChangeFile}
                data={props.data}
              />
            </ImgWrapper>

            <ButtonWrapper>
              {!props.isEdit && (
                <Button01
                  buttonName="등록하기"
                  type="submit"
                  isActive={props.isActive}
                  disabled={props.formState.isSubmitting}
                />
              )}
              {props.isEdit && (
                <Button01
                  buttonName="수정하기"
                  type="submit"
                  isActive={props.isActive}
                  disabled={props.formState.isSubmitting}
                />
              )}
            </ButtonWrapper>
          </Body>
        </Wrapper>
      </form>
    </>
  );
}
