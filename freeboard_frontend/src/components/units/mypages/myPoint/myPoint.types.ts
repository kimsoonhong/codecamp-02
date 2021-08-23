import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ImyPointUIProps {
  width: any;
  SellingData: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
  LoadingData: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
  BuyingData: Pick<IQuery, "fetchPointTransactionsOfBuying"> | undefined;
  allData: Pick<IQuery, "fetchPointTransactions"> | undefined;
  isActive: boolean;
  activedPage: String;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
