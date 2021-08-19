import { memo, useMemo } from "react";

function presenter(props) {
  console.log("프리젠터가 렌더링을 시작합니다.//자식");

  let randomNum = useMemo(() => Math.random(), []);
  console.log(randomNum); //    복잡한 계산할때 계산결과 저장용도
  return (
    <div>
      <div></div>
      <div>
        ===============================프리젠터===============================
      </div>
      <div>저는 프리젠터여유~</div>
      <div>
        ===============================프리젠터===============================
      </div>
      <div>{props.countState}</div>
      <div></div>
    </div>
  );
}

export default memo(presenter);
