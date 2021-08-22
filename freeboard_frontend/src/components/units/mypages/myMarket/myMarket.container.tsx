import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyMarketUI from "./myMarket.presenter";
import { FETCH_ISOLD, FETCH_IPICKED } from "./myMarket.queries";

export default function myMarket() {
  const { data } = useQuery(FETCH_ISOLD);
  const { data: pickData } = useQuery(FETCH_IPICKED);
  const router = useRouter();
  const [isMyItem, setIsItem] = useState(true);

  const onClickItem = (marketId) => () => {
    router.push(`/market/${marketId._id}`);
  };
  const onClickMyItem = () => {
    setIsItem(true);
  };
  const onClickMyPick = () => {
    setIsItem(false);
  };

  console.log(pickData);
  return (
    <MyMarketUI
      pickData={pickData}
      data={data}
      onClickItem={onClickItem}
      isMyItem={isMyItem}
      onClickMyItem={onClickMyItem}
      onClickMyPick={onClickMyPick}
    />
  );
}
