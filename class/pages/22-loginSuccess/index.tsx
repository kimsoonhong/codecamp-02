import { gql, useQuery } from "@apollo/client";
import router from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../_app";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

export default function loginsuccesspage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) router.push("/22-login");
  }, []);
  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
