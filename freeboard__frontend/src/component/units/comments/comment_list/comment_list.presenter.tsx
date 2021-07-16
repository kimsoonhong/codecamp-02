import { IBoardPresenterProps } from "./comment_list.types";

import {
	Wrapper,
	Star_input,
	Star_view,
	Comment_wrapper,
	Photo,
	Comment_box,
	Comment_top,
	Writer,
	Comment_middle,
	Comment_date,
	Right_Wrapper,
	Edit_button,
	Delete_button,
} from "./comment_list.styles";

export default function commentpresenter(props: IBoardPresenterProps) {
	console.log(props.commentsData);

	return (
		<div>
			{props.commentsData?.fetchBoardComments.map(
				(data: any, index: number) => (
					<Wrapper key={data._id}>
						<Comment_wrapper>
							<Photo>O</Photo>
							<Comment_box>
								<Comment_top>
									<Writer>{data.writer}</Writer>
									<Star_input>
										<Star_view>{data.rating}</Star_view>
									</Star_input>
								</Comment_top>
								<Comment_middle>{data.contents}</Comment_middle>
								<Comment_date>
									Date:
									{data.createdAt}
								</Comment_date>
							</Comment_box>
							<Right_Wrapper>
								<Edit_button></Edit_button>
								<Delete_button></Delete_button>
							</Right_Wrapper>
						</Comment_wrapper>
						<button onClick={() => console.log(data._id)}>dd</button>
					</Wrapper>
				)
			)}
		</div>
	);
}
