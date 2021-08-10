import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS, FETCH_USER_LOGGED_IN } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../commons/withAuth";

const marketList = () => {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });
  const resultUser = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  console.log(data);
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
      />
    </div>
  );
};

export default withAuth(marketList);
