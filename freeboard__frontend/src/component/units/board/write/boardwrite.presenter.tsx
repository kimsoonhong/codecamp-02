import { IBoardPresenterProps } from "./boardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import {
	Wrapper,
	Title,
	InnerWrapper,
	Box_big3,
	Photo_box,
	Left_div,
	Text,
	Small_input,
	Right_div,
	Index_div,
	Middle_input,
	Contents,
	Contents_input,
	Address_div,
	Address_inner_div,
	Search_address_div,
	Number_input,
	Search_button,
	Inner_div,
	Youtube,
	Photo_div,
	Photo_img,
	Option_div,
	Radio_button,
	Radio_text,
	Upload_div,
	Upload,
	Error,
	Test,
} from "./boardwrite.styles";
import Postcode from "../../../../commons/libraries/test";
export default function BoardWriteUI(props: IBoardPresenterProps) {
	// console.log("sdf", props.data?.fetchBoard.youtubeUrl);
	return (
		<Wrapper>
			<Title>
				{props.isEdit ? "게시물 수정 페이지" : "게시물 등록 페이지"}
			</Title>
			<InnerWrapper>
				<Box_big3>
					<Left_div>
						<Text>작성자</Text>
						<Small_input
							name="writer"
							placeholder="이름을 입력해 주세요."
							defaultValue={props.data?.fetchBoard.writer}
							onChange={props.onChangeInputs}
							readOnly={props.data?.fetchBoard.writer}
						></Small_input>
						<Error>{props.inputsErrors.writer}</Error>
					</Left_div>
					<Right_div>
						<Text>비밀번호</Text>
						<Small_input
							name="password"
							placeholder="비밀번호를 입력해 주세요"
							type="password"
							onChange={props.onChangeInputs}
						></Small_input>
						<Error>{props.inputsErrors.password}</Error>
					</Right_div>
				</Box_big3>
				<Index_div>
					<Text>제목</Text>
					<Middle_input
						name="title"
						placeholder="제목을 입력해주세요"
						defaultValue={props.data?.fetchBoard.title}
						onChange={props.onChangeInputs}
					></Middle_input>
					<Error>{props.inputsErrors.title}</Error>
				</Index_div>
				<Contents>
					<Text>내용</Text>
					<Contents_input
						name="contents"
						placeholder="내용을 입력해주세요"
						defaultValue={props.data?.fetchBoard.contents}
						onChange={props.onChangeInputs}
					></Contents_input>
					<Error>{props.inputsErrors.contents}</Error>
				</Contents>
				<Address_div>
					<Text>주소</Text>
					<Address_inner_div>
						<Search_address_div>
							<Number_input
								onChange={props.onChangeInputs}
								value={props.zonecode}
								placeholder="우편번호"
								name="zipcode"
							></Number_input>
							<Search_button onClick={props.onClickModal_address}>
								우편번호 검색
							</Search_button>
						</Search_address_div>
						<Inner_div>
							<Middle_input
								name="address"
								onChange={props.onChangeInputs}
								value={props.address}
							></Middle_input>
							<Middle_input
								name="addressDetail"
								onChange={props.onChangeInputs}
								placeholder="상세주소를 기입해 주세요."
							></Middle_input>
						</Inner_div>
					</Address_inner_div>
				</Address_div>
				<Youtube>
					<Text>유뷰브</Text>
					<Middle_input
						name="youtubeUrl"
						placeholder="링크를 복사해 주세요."
						defaultValue={props.data?.fetchBoard.youtubeUrl}
						onChange={props.onChangeInputs}
					></Middle_input>
				</Youtube>
				<Photo_div>
					<Text>사진 첨부</Text>
					<Photo_box>
						<Photo_img>
							<div>+</div>
							<div>Upload</div>
						</Photo_img>
						<Photo_img>
							<div>+</div>
							<div>Upload</div>
						</Photo_img>
						<Photo_img>
							<div>+</div>
							<div>Upload</div>
						</Photo_img>
					</Photo_box>
				</Photo_div>
				<Option_div>
					<Text>메인설정</Text>
					<Radio_button type="radio" name="radio_button"></Radio_button>
					<Radio_text>유튜브</Radio_text>
					<Radio_button type="radio" name="radio_button"></Radio_button>
					<Radio_text>사진</Radio_text>
				</Option_div>
				<Upload_div>
					{!props.isEdit && (
						<Upload disabled={props.active} onClick={props.onClickModal_update}>
							등록하기
						</Upload>
					)}
					{props.isEdit && (
						<Upload onClick={props.onClickUpdate} disabled={props.active}>
							수정하기
						</Upload>
					)}
				</Upload_div>
			</InnerWrapper>

			<Modal
				visible={props.isopen_update === true}
				onOk={props.onClickSubmit}
				onCancel={props.onClose_update}
			>
				게시물 등록해?
			</Modal>

			{props.isopen_address && (
				<Modal
					title="주소검색하기"
					visible={props.onClickModal_address}
					onOk={props.onClickSubmit_address}
					onCancel={props.onClose_address}
				>
					주소검색
					<DaumPostcode onComplete={props.onComplete} />
				</Modal>
			)}
		</Wrapper>
	);
}
