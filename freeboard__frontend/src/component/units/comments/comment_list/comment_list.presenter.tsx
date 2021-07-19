import { IBoardPresenterProps } from "./comment_list.types";
import BoardCommentListItem from "../comment_list_item/boardcommentlistitem.container";

export default function CommentListUI(props: IBoardPresenterProps) {
	// const [isEdit, setIsEdit] = useState([false, false, ...])
	console.log(props.commentsData?.fetchBoardComments);
	return (
		<div>
			{props.commentsData?.fetchBoardComments.map(
				(data: any, index: number) => (
					<BoardCommentListItem
						key={data._id}
						data={data}
						onClickEditComment={props.onClickEditComment}
					/>
				)
			)}
			{/* <CommentEditContainer /> */}
		</div>
	);
}
