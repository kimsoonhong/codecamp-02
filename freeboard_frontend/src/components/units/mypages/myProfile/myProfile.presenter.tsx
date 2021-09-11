import Input100 from "../../../commons/Inputs/Input_width_100";
import Button01 from "../../../commons/Buttons/Button-Middle-01";
import {
  Wrapper,
  PasswordWrapper,
  Title,
  PasswordInnerWrapper,
  ContentsWrapper,
  InnerText,
} from "./myProfile.styles";
import { ChangeEvent } from "react";

interface ImyProfileUI {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  onChangePasswordCheck: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function myProfileUI(props: ImyProfileUI) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Wrapper>
          <PasswordWrapper>
            <Title> 비밀번호 변경</Title>
            <PasswordInnerWrapper>
              <ContentsWrapper>
                <InnerText>현재 비밀번호 </InnerText>
                <Input100
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
              </ContentsWrapper>
              <ContentsWrapper>
                <InnerText>새 비밀번호 </InnerText>
                <Input100
                  register={{ ...props.register("password") }}
                  errorMessage={props.errors.password?.message}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
              </ContentsWrapper>
              <ContentsWrapper>
                <InnerText>새 비밀번호 확인</InnerText>
                <Input100
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={props.onChangePasswordCheck}
                />
              </ContentsWrapper>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button01 type="submit" buttonName="비밀번호변경" />
              </div>
            </PasswordInnerWrapper>
          </PasswordWrapper>

          {/* <PictureWrapper>
            <Title>대표사진 변경</Title>
            <PictuerInnerWrapper>
              <PictuerLiftWrapper>
                <PictuerBox />
              </PictuerLiftWrapper>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button01 />
              </div>
            </PictuerInnerWrapper>
          </PictureWrapper> */}
        </Wrapper>
      </form>
    </>
  );
}
