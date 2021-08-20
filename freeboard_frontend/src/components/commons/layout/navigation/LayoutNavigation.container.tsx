import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
export default function LayoutNavigation() {
  const router = useRouter();
  const [isClick, setIsClick] = useState("");

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

  }

  return <LayoutNavigationUI EnterToMenu={EnterToMenu} isClick={isClick} />;
}
