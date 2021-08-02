import ContextAPI from "../../src/components/units/21-contextAPI/contextAPI.container";
import { createContext, useState } from "react";

interface IContext {
  isEdit?: boolean;
  onClickEdit: () => void;
}

export const aaaContext = createContext<IContext>({});

export default function contextAPIPage() {
  const [isEdit, setIsEdit] = useState(true);

  function onClickEdit() {
    setIsEdit(false);
    console.log("dd");
  }
  const value = {
    isEdit: isEdit,
    onClickEdit: onClickEdit,
  };

  return (
    <aaaContext.Provider value={value}>
      <ContextAPI />
    </aaaContext.Provider>
  );
}
