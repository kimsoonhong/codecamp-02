import { IBoardPresenterProps } from "./boarddetail.types";
import ReactPlayer from "react-player";
import {
	Wrapper,
	Top_wrapper,
	Writer_wrapper,
	Writer_img,
	Writer_div,
	Writer_name,
	Writer_date,
	Top_right_wrapper,
	Link_img,
	Address_img,
	Board_body_wrapper,
	Title_div,
	Img_div,
	Contents_div,
	YoutubeUrl,
	Like_button,
	Like_div,
	UP,
	Down,
	Button_wapper,
	Button_middle,
	Youtube,
	Count_Div,
} from "./boarddetail.styles";

export default function BoardDetailUI(
	props: IBoardPresenterProps // prop 를 사용하지 않을때 사용해야 하며 컨네이너의 함수와 무조건 같아야 함
) {
	// console.log("dddd", props.data?.fetchBoard.youtubeUrl);
	return (
		<>
			<Wrapper>
				<Top_wrapper>
					<Writer_wrapper>
						<Writer_img src="/favicon.ico" />
						<Writer_div>
							<Writer_name>{props.data?.fetchBoard.writer}</Writer_name>
							<Writer_date>
								Date: {props.data?.fetchBoard.createdAt.slice(0, 10)}
							</Writer_date>
						</Writer_div>
					</Writer_wrapper>
					<Top_right_wrapper>
						<Link_img src="/detail/link.png"></Link_img>
						<Address_img src="/detail/point.png"></Address_img>
					</Top_right_wrapper>
				</Top_wrapper>

				<Board_body_wrapper>
					<Title_div>{props.data?.fetchBoard.title}</Title_div>
					<Img_div></Img_div>
					<Contents_div>{props.data?.fetchBoard.contents}</Contents_div>
					<YoutubeUrl>
						<Youtube
							url={props.data?.fetchBoard.youtubeUrl}
							playing={true}
							muted={true}
						/>
					</YoutubeUrl>
					<Like_button>
						<Like_div>
							<Count_Div onClick={props.onClicklike}>
								<UP src="/detail/up.png"></UP>
								{props.data?.fetchBoard.likeCount}
							</Count_Div>
							<Count_Div>
								<Down src="/detail/down.png"></Down>
								{props.data?.fetchBoard.dislikeCount}
							</Count_Div>
						</Like_div>
					</Like_button>
				</Board_body_wrapper>
			</Wrapper>

			<Button_wapper key={props.data?.fetchBoard._id}>
				<Button_middle onClick={props.onClickList}>목록으로</Button_middle>
				<Button_middle
					id={props.data?.fetchBoard._id}
					onClick={props.onClickEdit}
				>
					수정하기
				</Button_middle>
				<Button_middle
					id={props.data?.fetchBoard._id}
					onClick={props.onClickDelete}
				>
					삭제하기
				</Button_middle>
			</Button_wapper>
		</>
	);
}

// {!props.isEdit && <Mybutton onClick={props.onClickSubmit} active={props.active} > 데이터 입력하기</Mybutton>}
// {props.isEdit && <Mybutton onClick={props.onClickEdit} active={props.active} > 데이터 수정하기</Mybutton>}
