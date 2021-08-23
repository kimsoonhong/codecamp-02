import { MouseEvent, ChangeEvent } from "react";

export interface IBoardListUIProps {
  data: any;
  props: any;
  lastPage: Number;
  startpage: Number;
  activedPage: Number;
  isActive: () => void;
  onClickNextPage: () => void;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
  isMatched: any;
  keyword: String;
}
