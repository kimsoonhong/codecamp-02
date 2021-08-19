import { useCallback, useMemo, useState } from "react";
import Presenter from "./presenter";

export default function container() {
  console.log("컨테이너가 랜더링을 시작합니다.//부모");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  console.log(countState);

  // let randomNum = useMemo(() => Math.random(), []);
  // console.log(randomNum); //    복잡한 계산할때 계산결과 저장용도

  //실제 사용하진 않지만 useMemo의 기능을 이해하고 있다면 이해할 수 있을것이니라..
  // let aaa = useMemo(() => {
  //   return () => {
  //     console.log("state클릭");
  //     console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   };
  // }, []);

  // 의존성배엘에 데이터가 적을떄 사용함, 함수내부가 크게 복잡하지 않을때 사용함,
  // 만약 복잡하다면 주의해서 사용하기.
  const onClickCountLet = useCallback(() => {
    console.log("let클릭");
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, [khuh]);

  const onClickCountState = useCallback(() => {
    console.log("state클릭");
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>
        ===-=-=-===-=-=-=-=-=-=====-=-=====-=-===-=-=====컨테이너==-=-===-=-=-==-=-===-=-=-=-=-=-=-=-=====
      </div>
      <br />
      <div>countLet :{countLet} </div>
      <button onClick={onClickCountLet}>countLet +1</button>
      <br />
      <br />
      <div>countState :{countState}</div>
      <button onClick={onClickCountState}>conuntState +1</button>
      <br />
      <div>
        ======-===-=-=-=-=-=-==-=-=-=-=-=-==-=-=-==-=-=-=컨테이너===-=-=-=-=-=-=-=-=-=-=-=====-=-=-=======
      </div>
      <br />
      <Presenter countState={countState} />
    </div>
  );
}

//유즈 콜백 , 유즈 메모,
