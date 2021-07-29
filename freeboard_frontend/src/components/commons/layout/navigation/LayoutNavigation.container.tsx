import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
export default function LayoutNavigation() {
  const router = useRouter();
  const [isClick, setIsClick] = useState("");

  console.log(isClick);

  // function EnterToBoard() {
  //   router.push("/boards");
  // }

  // function EnterToOpenAPI() {
  //   router.push("/openAPI");
  // }

  function EnterToMenu(event: MouseEvent<HTMLDivElement>) {
    router.push(`/${(event.target as Element).id}`);
    const activedPage = event.target.id;
    setIsClick(activedPage);
    // console.log(activedPage);
  }

  return <LayoutNavigationUI EnterToMenu={EnterToMenu} isClick={isClick} />;
}
