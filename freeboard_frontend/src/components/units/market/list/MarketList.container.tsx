import MarketListUI from "./MarketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_BEST_ITEM,
} from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../commons/withAuth";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import _ from "lodash";

const marketList = () => {
  const [hasMore, setHasMore] = useState(true);
  const [isSoldout, setIsSoldout] = useState("selling");
  const [keyword, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1, isSoldout: false },
  });

  const getDebounce = _.debounce((data) => {
    // @ts-ignore
    refetch({ search: data });
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
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

    // const todaylist = JSON.parse(sessionStorage.getItem("todaylist") || "[]");

    // todaylist.unshift(marketId);

    // sessionStorage.setItem("todaylist", JSON.stringify(todaylist));

    // ===========
    const newBaskets = [marketId];
    const baskets = JSON.parse(
      sessionStorage.getItem("todaylist") || "[]"
    ).filter((el: any, i: any) => i < 4 && el._id !== marketId._id);
    sessionStorage.setItem(
      "todaylist",
      JSON.stringify(newBaskets.concat(baskets))
    );
    // ===========
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

  function onClickIsSoldout(event: MouseEvent<HTMLButtonElement>) {
    if ((event.target as Element).id === "selling") {
      refetch({ isSoldout: false });
    }
    if ((event.target as Element).id === "soldout") {
      refetch({ isSoldout: true });
    }
    setIsSoldout((event.target as Element).id);
  }

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
        onClickIsSoldout={onClickIsSoldout}
        isSoldout={isSoldout}
        inputRef={inputRef}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
      />
    </div>
  );
};

export default withAuth(marketList);
