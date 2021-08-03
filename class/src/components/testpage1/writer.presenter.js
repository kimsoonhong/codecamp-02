import Input1 from "../testpage/input1.container";
import  Button1 from "../testbutton/button.container"

export default function wirtertest(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      작성자
      <Input1 name="writer"  onchangeinput={props.onchangeinput} /  >
     
        
      비밀번호
      <BBb name="password" />
      제목
      <BBb name="title" />
      컨텐츠
      <BBb name="content" />
      <Button1 onsum={props.onsum}></Button1>
    </div>
  );
}
