export interface IBoardDetailUIProps {
  data: any;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickBasket: (basketData: any) => () => void;
  onClickDeleteBasket: (basketData: any) => () => void;
  onClickDeletItem: () => void;
  isSetItem: boolean;
  onclickPick: () => void;
  userData: any;
  onclickTransaction: () => void;
  isActive?: boolean;
}
