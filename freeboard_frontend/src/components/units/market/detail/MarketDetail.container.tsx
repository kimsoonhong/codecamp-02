import MarketDetailUI from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM, TOGGIE_PICK } from "./MarketDetail.queries";
import withAuth from "../../../commons/withAuth";
import { useState } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [toggleUseditemPick] = useMutation(TOGGIE_PICK);
  const [isSetItem, setIsSetItem] = useState(true);

  function onClickMoveToList() {
    router.push("/market");
  }

  const onClickBasket = (basketData) => () => {
    setIsSetItem(false);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    let isExists = false;

    baskets.forEach((data) => {
      if (data.fetchUseditem._id === basketData.fetchUseditem._id)
        isExists = true;
    });
    if (isExists) return;

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickDeleteBasket = (basketData) => () => {
    setIsSetItem(true);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    baskets.pop();
    console.log(baskets.indexOf());
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  function onClickMoveToEdit() {
    router.push(`/market/${router.query.useditemId}/edit`);
    console.log("dd");
  }

  const onclickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  };
  console.log(data, "dd");
  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickBasket={onClickBasket}
      onClickDeleteBasket={onClickDeleteBasket}
      isSetItem={isSetItem}
      onclickPick={onclickPick}
    />
  );
};

export default withAuth(BoardDetail);
