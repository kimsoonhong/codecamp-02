import MarketListUI from "./MarketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_BEST_ITEM,
} from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../commons/withAuth";
import { useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

const marketList = () => {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  const { data: resultUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: bestItem } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USED_BEST_ITEM);
  const router = useRouter();

  const [baskets, setBaskets] = useState();
  const [isSetItem, setIsSetItem] = useState(true);

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("todaylist") || "[]");
    setBaskets(items);
  }, []);

  const onClickMoveToDetail = (marketId: any) => () => {
    setIsSetItem(false);
    const todaylist = JSON.parse(sessionStorage.getItem("todaylist") || "[]");
    todaylist.unshift(marketId);
    sessionStorage.setItem("todaylist", JSON.stringify(todaylist));
    router.push(`/market/${marketId._id}`);
  };

  const onClickMoveToWrite = () => {
    router.push(`/market/new`);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
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
        onLoadMore={onLoadMore}
        hasMore={hasMore}
      />
    </div>
  );
};

export default withAuth(marketList);
