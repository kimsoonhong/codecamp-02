import { useContext } from 'react';


export default function testpageUI(props) {
  const {onClick} = useContext(ButtonContext)
  return (
    <>
     <button onClick={props.onsum}>등록하기</button>
      
     
    </>
  );
}
