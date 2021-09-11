import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketListUIProps {
  // onClickDeleteBasket: (basketData: any) => () => void;
  data: any;
  resultUser: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickMoveToDetail: (marketId: any) => () => void;
  onClickMoveToWrite: () => void;
  bestItem: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
  baskets: any;
  isSetItem: any;
  onLoadMore: () => void;
  hasMore: boolean;
  isActive?: boolean;
  // onClickMoveToList: () => void;
  // onClickMoveToEdit: () => void;
  // onClickMoveToDetail: (marketId: any) => () => void;

  // onClickDeletItem: () => void;
  // isSetItem: boolean;
  // onclickPick: () => void;
  // userData: any;
  // onclickTransaction: () => void;
  // isActive?: boolean;
  onClickIsSoldout: (event: MouseEvent<HTMLButtonElement>) => void;
  isSoldout: string;
  inputRef: any;
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

// const { data: allData } = useQuery<Pick<IQuery, "fetchPointTransactions">>(
//   FETCH_TRANSACTIONS_ALL
// );

// allData: Pick<IQuery, "fetchPointTransactions"> | undefined;

// function onChangeContents(event: ChangeEvent<HTMLDivElement>) {
//   setContents((event.target as any).value);
// }

// onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
// onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
