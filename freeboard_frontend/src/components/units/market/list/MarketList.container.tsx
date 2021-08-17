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
  const [isSetItem, setIsSetItem] = useState(true);

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("todaylist") || "[]");
    setBaskets(items);
  }, []);

  const onClickMoveToDetail = (marketId) => () => {
    // setIsSetItem(false);
    // =
    // =
    // =
    const todaylist = JSON.parse(sessionStorage.getItem("todaylist") || "[]");

    // let isExists = false;

    // todaylist.forEach((baskets) => {
    //   if (baskets.fetchUseditems._id === marketId.fetchUseditems._id)
    //     isExists = true;
    // });
    // if (isExists) return;

    // todaylist.length > 5
    //   ? todaylist.pop()
    //   : todaylist.unshift(marketId) && todaylist.pop();
    todaylist.unshift(marketId);
    sessionStorage.setItem("todaylist", JSON.stringify(todaylist));

    // =
    // =
    // =

    router.push(`/market/${marketId._id}`);
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
        isSetItem={isSetItem}
      />
    </div>
  );
};

export default withAuth(marketList);
