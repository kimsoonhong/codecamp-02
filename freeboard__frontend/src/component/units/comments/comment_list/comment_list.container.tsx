import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./comment_list.querise";
import { useRouter } from "next/router";
import CommentListUI from "./comment_list.presenter";
import { IBoardContainerProps } from "./comment_list.types";

export default function CommentListContainer(props: IBoardContainerProps) {
	const router = useRouter();
	const { data: commentsData } = useQuery(FETCH_BOARD_COMMENTS, {
		variables: { boardId: router.query.board_detail },
	});

	return <CommentListUI commentsData={commentsData} />;
}
