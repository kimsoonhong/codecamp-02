import BoardWrite from '../../../../../src/component/units/board/write/boardwrite.container'

export default function Editboard() { //파일명을 사용해야함

    const isEdit = true

    return(
    <BoardWrite 
    isEdit = {isEdit}
    / >
    )
}
