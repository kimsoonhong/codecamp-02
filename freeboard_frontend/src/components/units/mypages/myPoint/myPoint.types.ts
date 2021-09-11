import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ImyPointUIProps {
  width?: any;
  SellingData?: Pick<IQuery, "fetchPointTransactionsOfSelling"> | undefined;
  LoadingData?: Pick<IQuery, "fetchPointTransactionsOfLoading"> | undefined;
  BuyingData?: Pick<IQuery, "fetchPointTransactionsOfBuying"> | undefined;
  allData?: Pick<IQuery, "fetchPointTransactions"> | undefined;
  isActive?: boolean;
  activedPage?: String;
  onClickMenu?: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: any;
  keyword: string;
  onClickPage?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextPage?: (event: MouseEvent<HTMLDivElement>) => void;
  startpage: number;
  activedPages: number;

  buyinglastPage: number;
  loadinglastPage: number;
  sellinglastPage: number;
  buyingsearchPage: number;
  loadingsearchPage: number;
  sellingsearchPage: number;
}
