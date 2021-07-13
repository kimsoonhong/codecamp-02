export default function BoardDetailPresenter({
    data
}) {
    return(
        <div>
             <div>작성자 :{data ? data.fetchBoard.writer : '222'}</div>
             <div>글제목 :{data?.fetchBoard.title}</div>
             <div>글내용 :{data && data.fetchBoard.contents}</div>
        </div>
    )
}