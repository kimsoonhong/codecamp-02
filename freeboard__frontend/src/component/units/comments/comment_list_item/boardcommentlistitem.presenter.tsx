import { getDate } from "../../../../commons/libraries/utils";
// import CommentWriteContainer from "../comment_write/comment_write.container";
// import CommentListContainer from "../comment_list/comment_list.container";

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
	Top_wrapper,
	Writer_input,
	Password_input,
	Edit_wrapper,
	Edit_text,
	Edit_bottom,
	Space_div,
	Text_count,
	Uploed_Button,
} from "../comment_list/comment_list.styles";
import { useState } from "react";

export default function BoardCommentListItemUI(props) {
	return (
		<>
			{!props.isEdit && (
				<Wrapper key={props.data._id}>
					<Comment_wrapper>
						<Photo>O</Photo>
						<Comment_box>
							<Comment_top>
								<Writer>{props.data.writer}</Writer>
								<Star_input>
									<Star_view>{props.data.rating}</Star_view>
								</Star_input>
							</Comment_top>
							<Comment_middle>{props.data.contents}</Comment_middle>
							<Comment_date>
								Date:
								{getDate(props.data.createdAt)}
							</Comment_date>
						</Comment_box>
						<Right_Wrapper>
							<Edit_button
								// id={index}
								onClick={props.onClickEditComment}
							></Edit_button>
							<Delete_button
								id={props.data._id}
								onClick={props.onClickDeleteComment}
							></Delete_button>
						</Right_Wrapper>
					</Comment_wrapper>
				</Wrapper>
			)}

			{props.isEdit && (
				<Wrapper>
					<Top_wrapper>
						<Writer_input
							name="writer"
							placeholder="이름을 입력해 주세요."
							// value={props.inputs.writer}
							defaultValue={props.data?.writer}
							onChange={props.onChangeInputs}
							readOnly={props.data?.writer}
						/>
						{/* {props.data?.writer}
						</Writer_input> */}
						<Password_input
							name="password"
							placeholder="비밀번호를 입력해 주세요"
							type="password"
							onChange={props.onChangeInputs}
						/>
						{/* {props.data?.password}
						</Password_input> */}
						<Star_input>
							<Star_view>*</Star_view>
							<Star_view>*</Star_view>
							<Star_view>*</Star_view>
							<Star_view>*</Star_view>
							<Star_view>*</Star_view>
						</Star_input>
					</Top_wrapper>
					<Edit_wrapper>
						<Edit_text
							name="contents"
							placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보
						유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
						게시자에게 있습니다."
							// defaultValue={props.data?.fetchBoardComments.contents}
							// value={props.data?.inputs.contents}
							onChange={props.onChangeInputs}
						>
							{props.data?.contents}
						</Edit_text>
						<Edit_bottom>
							<Text_count>0/100</Text_count>
							<Uploed_Button
								// disabled={props.active}
								onClick={props.onClickUpdateComment}
								id={props.data?._id}
							>
								수정하기?
							</Uploed_Button>
						</Edit_bottom>
					</Edit_wrapper>
					<Space_div></Space_div>
				</Wrapper>
			)}
		</>
	);
}
