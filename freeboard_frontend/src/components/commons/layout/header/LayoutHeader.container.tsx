import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogin() {
    router.push("/login");
  }
  return <LayoutHeaderUI onClickLogin={onClickLogin} />;
}
