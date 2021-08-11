import MarketListUI from "./MarketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_BEST_ITEM,
} from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../commons/withAuth";
import { useEffect } from "react";
import { useState } from "react";

const marketList = () => {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });
  const resultUser = useQuery(FETCH_USER_LOGGED_IN);
  const { data: bestItem } = useQuery(FETCH_USED_BEST_ITEM);
  const router = useRouter();

  const [baskets, setBaskets] = useState();
  // console.log(data);
  // console.log(baskets);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);

  const onClickMoveToDetail = (marketId) => () => {
    router.push(`/market/${marketId}`);
  };

  const onClickMoveToWrite = () => {
    router.push(`/market/new`);
  };

  return (
    <div>
      <MarketListUI
        data={data}
        resultUser={resultUser}
        onClickMoveToDetail={onClickMoveToDetail}
        onClickMoveToWrite={onClickMoveToWrite}
        bestItem={bestItem}
        baskets={baskets}
      />
    </div>
  );
};

export default withAuth(marketList);
