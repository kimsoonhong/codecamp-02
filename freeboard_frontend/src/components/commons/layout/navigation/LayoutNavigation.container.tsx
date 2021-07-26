import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
export default function LayoutNavigation() {
  const router = useRouter();

  function EnterToOpenAPI() {
    router.push("/openAPI");
  }

  return <LayoutNavigationUI EnterToOpenAPI={EnterToOpenAPI} />;
}
