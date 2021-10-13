import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
export default function LayoutNavigation() {
  const router = useRouter();
  const [isClick, setIsClick] = useState("");

  function EnterToMenu(event: MouseEvent<HTMLDivElement>) {
    router.push(`/${(event.target as Element).id}`);
    const activedPage = (event.target as any).id;
    setIsClick(activedPage);
  }

  return <LayoutNavigationUI EnterToMenu={EnterToMenu} isClick={isClick} />;
}
