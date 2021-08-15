import { useRouter } from "next/router";

export default function kakaomap2() {
  const router = useRouter();

  const onClickTomap = () => {
    router.push("/29-kakaomap");
  };

  return (
    <div>
      <div>카카오맵 2</div>
      <div></div>
      <div></div>
      <button onClick={onClickTomap}>지도로이동</button>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
