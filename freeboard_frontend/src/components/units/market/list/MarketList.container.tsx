import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";

export default function marketList() {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  console.log(data, "asldkfj");

  return (
    <div>
      <MarketListUI data={data} />
    </div>
  );
}
