import ButtonMiddle02 from "../../src/components/commons/Buttons/Button-Middle-02";
import ButtonMiddle01 from "../../src/components/commons/Buttons/Button-Middle-01";
import Buttonlarge01 from "../../src/components/commons/Buttons/Button-Large-01";
import ButtonSmall01 from "../../src/components/commons/Buttons/Button-small-01";
import ButtonSmall02 from "../../src/components/commons/Buttons/Button-small-02";

import Input100 from "../../src/components/commons/Inputs/Input_width_100";
import Input180 from "../../src/components/commons/Inputs/Input_Small_180";
import Input384 from "../../src/components/commons/Inputs/Input_Login_384";
import Input486 from "../../src/components/commons/Inputs/Input_Middle_486";
import Input588 from "../../src/components/commons/Inputs/Input_Middle_588";
import InputTextarea from "../../src/components/commons/Inputs/Input_Textarea_01";

export default function marketList() {
  return (
    <div>
      {/* <FileUpload /> */}

      <ButtonMiddle01 />
      <ButtonMiddle02 />
      <ButtonSmall01 />
      <ButtonSmall02 />
      <Buttonlarge01 />

      <Input100 />
      <Input180 />
      <Input384 />
      <Input486 />
      <Input588 />
      <InputTextarea />
    </div>
  );
}
