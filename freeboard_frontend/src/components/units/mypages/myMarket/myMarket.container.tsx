import { useQuery } from "@apollo/client";
import MyMarketUI from "./myMarket.presenter";
import { FETCH_ISOLD } from "./myMarket.queries";

export default function myMarket() {
  const { data } = useQuery(FETCH_ISOLD);

  return <MyMarketUI data={data} />;
}
