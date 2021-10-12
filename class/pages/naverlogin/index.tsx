import NaverLogin from "react-login-by-naver";

export default function naverlogin() {

console.log(NaverLogin)


  return (
    <>
      <div>dd</div>
      <NaverLogin
        clientId="wB_SSJRLJANaC0F4okrV"
        callbackUrl="http://localhost/remembered/naver/api/Oauth"
        render={(props: any) => <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={(naverUser: any) => console.log(naverUser)}
        onFailure={() => {
          alert("하이");
          console.error();
        }}
      />
    </>
  );
}
