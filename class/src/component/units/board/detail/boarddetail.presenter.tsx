export default function BoardDetailPresenter(props) {
    return(
        <div>
            <div>작성자 :{props.data?.fetchBoard.writer }</div>
            <div>글제목 :{props.data?.fetchBoard.title}</div>
            <div>글내용 :{props.data?.fetchBoard.contents}</div>
            <button onClick={props.onClickEdit}>수정하기</button>
        </div>
    )
}