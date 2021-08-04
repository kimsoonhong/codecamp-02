import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../pages/_app";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("^^ 혼자왔네?");
      router.push("/22-login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
