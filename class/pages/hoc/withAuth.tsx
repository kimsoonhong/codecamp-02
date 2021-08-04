import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

const withAuth = (BBB: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      console.log("로그인해");
      router.push("/hoc/login");
    }
  }, []);

  return <BBB {...props} />;
};

export default withAuth;
