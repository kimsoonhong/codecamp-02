import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../pages/_app";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 해주세요 ^^^^^");
  //     router.push("/login");
  //   }
  // }, []);

  return <Component {...props} />;
};

export default withAuth;
