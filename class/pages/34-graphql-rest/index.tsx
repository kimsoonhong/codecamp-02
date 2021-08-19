import axios from "axios";

export default function graphql() {
  const onClickSubmit = async () => {
    const result = await axios.post(
      " https://backend02.codebootcamp.co.kr/graphql",
      {
        query: `
        mutation createBoard{
          createBoard(createBoardInput:{
            writer:"팽수"
            password:"1234"
            title:"춥다!"
            contents:"패딩이 필요해.."
          
          }){
            _id
            writer
            title
          }
        }
      `,
      }
    );
    console.log(result);
  };

  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <button onClick={onClickSubmit}>등록하기</button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
