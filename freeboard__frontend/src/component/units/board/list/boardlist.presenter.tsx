import { getDate } from "../../../../commons/libraries/utils";
import { IBoardPresenterProps } from "./boardlist.types";
import {
	Wapper,
	Index_title,
	Number_div,
	Title_div,
	Writer_div,
	Date_div,
	Content_wapper,
	Bottom_wapper,
	Page_div,
	Left_button,
	Pages_num,
	Right_button,
	Upload_button,
	Img_div,
} from "./boardlist.styles";

export default function Noticeboard(props: IBoardPresenterProps) {
	console.log(props.data);

	return (
		<div>
			<Wapper>
				<Index_title>
					<Number_div>번호</Number_div>
					<Title_div>제목</Title_div>
					<Writer_div>작성자</Writer_div>
					<Date_div>날짜</Date_div>
				</Index_title>
				{props.data?.fetchBoards.map((data: any, index: number) => (
					<Content_wapper key={data._id} onClick={props.onClickDetail}>
						<Number_div>{index + 1}</Number_div>
						<Title_div id={data._id}>{data.title}</Title_div>
						<Writer_div>{data.writer}</Writer_div>
						<Date_div>{getDate(data.createdAt)}</Date_div>
					</Content_wapper>
				))}

				<Bottom_wapper>
					<Page_div>
						<Left_button>왼쪽</Left_button>
						<Pages_num>1 2</Pages_num>
						<Right_button>오른쪽</Right_button>
					</Page_div>

					<Upload_button onClick={props.onClickWrite}>
						<Img_div src="/noticeboard/pan.png" />
						게시물 등록하기
					</Upload_button>
				</Bottom_wapper>
			</Wapper>
		</div>
	);
}
