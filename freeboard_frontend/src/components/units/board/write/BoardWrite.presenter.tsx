import { ChangeEvent } from "react";
import {
  Error,
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  Password,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  ImgButtonWrapper,
  UploadImg,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  CancelBoutton,
} from "./BoardWrite.styles";
import { INPUTS_INIT } from "./BoardWrite.container";
import Modal from "antd/lib/modal/Modal";
import DaumPostcode from "react-daum-postcode";

interface IBoardWriteUIProps {
  isOpen: boolean;
  isEdit?: boolean;
  active: boolean;
  zipcode: string;
  address: string;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onCancel: () => void;
  data: any;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGreyBox: () => void;
  onClickMoveToList: () => void;
  resultImgUrl: any;
  onChangeFile: any;
  onClickDeleteImg: any;
}

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true} onCancel={props.onCancel}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              name="writer"
              placeholder="이름을 입력해 주세요."
              defaultValue={props.data?.fetchBoard.writer}
              onChange={props.onChangeInputs}
              readOnly={props.data?.fetchBoard.writer}
            />
            <Error>{props.inputsErrors.writer}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.password}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            name="title"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.inputsErrors.title}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.inputsErrors.contents}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              name="zipcode"
              placeholder="98977"
              value={props.zipcode}
              defaultValue={props.data?.fetchBoard.boardAddress?.zipcode}
            />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address
            value={
              props.address || props.data?.fetchBoard.boardAddress?.address
            }
            readOnly
            // defaultValue={props.data?.fetchBoard.boardAddress?.address}
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            name="youtubeUrl"
            placeholder="링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            onChange={props.onChangeInputs}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <ImgButtonWrapper>
            {/* =
= */}

            {props.resultImgUrl.map((data: any, index: any) => (
              <UploadButton
                onClick={() => props.onClickDeleteImg(index)}
                key={index}
              >
                <UploadImg
                  src={
                    // props.isEdit
                    //   ? props.data?.fetchBoard.images[index]
                    `${props.resultImgUrl[index]}`
                  }
                />
                <div>-</div>
                <div>Delete</div>
                <input type="file" multiple style={{ display: "none" }} />
              </UploadButton>
            ))}
            {/* =
= */}
            {new Array(3 - props.resultImgUrl.length)
              .fill(1)
              .map((_, index) => {
                return (
                  <UploadButton onClick={props.onClickGreyBox} key={_}>
                    <label htmlFor={String(index)}>
                      <div>
                        <div>+</div>
                        <div>Upload</div>
                      </div>

                      <input
                        id={String(index)}
                        // ref={props.fileRef}
                        type="file"
                        onChange={props.onChangeFile}
                        multiple
                        style={{ display: "none" }}
                      />
                    </label>
                  </UploadButton>
                );
              })}
            {/* =
 = */}
          </ImgButtonWrapper>
        </ImageWrapper>

        <ButtonWrapper>
          <CancelBoutton onClick={props.onClickMoveToList}>
            돌아가기
          </CancelBoutton>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            // disabled={props.active}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
      <input type="text" />
    </>
  );
}
