import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("localLoginUser")) {
      alert("로그인 이후 이용해주세요.");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
