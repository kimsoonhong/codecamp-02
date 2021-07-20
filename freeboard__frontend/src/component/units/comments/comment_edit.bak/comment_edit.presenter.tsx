import { IBoardPresenterProps } from "./comment_edit.container";

import {
	Wrapper,
	Title,
	Title_img,
	Title_text,
	Top_wrapper,
	Writer_input,
	Password_input,
	Star_input,
	Star_view,
	Edit_wrapper,
	Edit_text,
	Edit_bottom,
	Space_div,
	Text_count,
	Uploed_Button,
} from "./comment_edit.styles";

export default function commentpresenter(props: IBoardPresenterProps) {
	return (
		<div>
			{/* {props.commentdata?.fetchBoardComments.map((data: any, index: number) => ( */}
			<Wrapper>
				<Top_wrapper>
					<Writer_input
						name="writer"
						placeholder="이름을 입력해 주세요."
						value={props.inputs.writer}
						// defaultValue={props.data?.fetchBoard.writer}
						onChange={props.onChangeInputs}
						// readOnly={props.data?.fetchBoard.writer}
					></Writer_input>
					<Password_input
						name="password"
						placeholder="비밀번호를 입력해 주세요"
						type="password"
						value={props.inputs.password}
						onChange={props.onChangeInputs}
					></Password_input>
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
						// defaultValue={props.data?.fetchBoard.contents}
						value={props.inputs.contents}
						onChange={props.onChangeInputs}
					></Edit_text>
					<Edit_bottom>
						<Text_count>0/100</Text_count>
						<Uploed_Button
							// disabled={props.active}
							onClick={props.onClickUpdate}
						>
							수정하기
						</Uploed_Button>
					</Edit_bottom>
				</Edit_wrapper>
				<Space_div></Space_div>
			</Wrapper>
			{/* ))} */}
		</div>
	);
}
