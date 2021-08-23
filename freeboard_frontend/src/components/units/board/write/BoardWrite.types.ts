export interface IBoardWriteProps {
  isEdit?: boolean;
  onCancel: () => void;

  data: any;
}

export interface ISubmitButtonProps {
  active: boolean;
}
