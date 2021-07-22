import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  // const wrapper = document.querySelector("#wrapper");
  // const wrapper_height = wrapper.getBoundingClientRect().height;
  // document.addEventListener("scroll", () => {
  //   if (window.scrollY > wrapper_height / 2) {
  //     navber.classList.add("navber--dark");
  //   } else {
  //     navber.classList.remove("navber--dark");
  //   }
  // });

  return (
    <Wrapper id="wrapper">
      <InnerWrapper>
        <InnerLogo>ㅅㅜ ㅣ ㅁ</InnerLogo>
        <div>
          <InnerButton>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
