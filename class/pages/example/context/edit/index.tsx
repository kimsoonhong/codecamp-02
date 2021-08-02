import WritePage from "../../../../src/components/units/write/write.container";
import { createContext } from "react";

interface IEdit {
  isEdit: boolean;
}

export const editContext = createContext<IEdit>({});

export default function edit() {
  const value = {
    isEdit: true,
  };

  return (
    <editContext.Provider value={value}>
      <WritePage />
    </editContext.Provider>
  );
}
