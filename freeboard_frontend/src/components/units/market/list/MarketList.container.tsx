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
  const onClickMoveToBoardDetail = (marketId) => () => {
    router.push(`/market/${marketId}`);
  };

  return (
    <div>
      <MarketListUI
        data={data}
        resultUser={resultUser}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </div>
  );
};

export default withAuth(marketList);
