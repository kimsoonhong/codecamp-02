// import styled from '@emotion/styled'
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	height: 1562px;
	padding: 80px 102px;
	border: 1px solid;
	/* background-color: green; */
	display: flex;
	flex-direction: column;
	margin: auto;
`;
export const Top_wrapper = styled.div`
	width: 100;

	/* background-color: blue; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid;
`;
export const Writer_wrapper = styled.div`
	/* background-color: blueviolet; */
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const Writer_img = styled.img`
	/* background-color: thistle; */
	display: block;
	width: 46.67px;
	height: 46.67px;
	border-radius: 50%;
`;

export const Writer_div = styled.div`
	/* background-color: wheat; */
	width: 100%;
	height: 100%;
	margin-left: 16.67px;
`;

export const Writer_name = styled.div`
	/* background-color: yellow; */
	display: flex;
	align-items: center;
	height: 50%;
	font-size: 24px;
`;

export const Writer_date = styled.div`
	height: 50%;
	/* background-color: thistle; */
	display: flex;
	align-items: top;
	font-size: 16px;
`;

export const Top_right_wrapper = styled.div`
	/* background-color: whitesmoke; */
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Link_img = styled.img`
	width: 26.26px;
	height: 13.33px;
	/* background-color: tomato; */
`;

export const Address_img = styled.img`
	width: 32px;
	height: 32px;
	margin-left: 22.67px;
	/* background-color:brown; */
`;

export const Board_body_wrapper = styled.div`
	/* background-color: red; */
	width: 100%;

	/* text-align:center; */
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Title_div = styled.div`
	width: 285px;
	height: 134px;
	padding-top: 80px;
	/* background-color: navajowhite; */

	font-family: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 53px;
`;
export const Img_div = styled.img`
	width: 100%;
	height: 520px;
	padding-top: 40px;
	/* background-color: gray; */
`;
export const Contents_div = styled.div`
	/* background-color: oldlace; */
	width: 100%;
	height: 136px;
	padding-top: 40px;
	/* background-color: wheat; */
	font-family: Noto Sans CJK KR;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
`;
export const YoutubeUrl = styled.div`
	width: 100%;

	/* display: inline-block; */
	/* margin: auto; */
	/* background-image: url("/detail/video.png");
background-size: 100%; */
`;
export const Like_button = styled.div`
	width: 100%;
	height: 172px;
	padding-top: 120px;
	/* background-color: orchid; */
`;
export const Like_div = styled.div`
	/* background-color: plum; */
	width: 120px;
	height: 100%;
	margin: 0 auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const UP = styled.img`
	width: 22px;
	height: 18px;

	/* background-color: navajowhite; */
`;
export const Down = styled.img`
	width: 22px;
	height: 18px;
	/* background-color: navajowhite; */
`;
export const Button_wapper = styled.div`
	width: 1200px;
	height: 212px;
	/* background-color: salmon; */
	padding: 80px 300px;
	display: flex;
	justify-content: space-between;
	margin: auto;
`;
export const Button_middle = styled.button`
	width: 180px;
	height: 100%;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
`;

export const Youtube = styled(ReactPlayer)`
	border: none;
	filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
	margin: auto;
`;
export const Count_Div = styled.div`
	/* background-color: violet; */
	display: flex;
	flex-direction: column;
	width: 40px;
	height: 50px;
	text-align: center;
`;
