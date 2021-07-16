import BoardDetailContainer from "../../../../src/component/units/board/detail/boarddetail.container";
import CommentWriteContainer from "../../../../src/component/units/comments/comment_write/comment_write.container";
import CommentlistContainer from "../../../../src/component/units/comments/comment_list/comment_list.container";

export default function boardDetailContainer() {
	return (
		<div>
			<BoardDetailContainer />
			<CommentWriteContainer />
			<CommentlistContainer />
		</div>
	);
}
