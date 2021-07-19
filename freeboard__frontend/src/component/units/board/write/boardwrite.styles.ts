// import styled from '@emotion/styled'
import styled from "@emotion/styled";

interface IProps {
	active: boolean;
}

export const Wrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	border: 2px solid;
	padding-right: 102px;
	padding-left: 102px;
	padding-bottom: 100px;
	padding-top: 60px;
	/* background-color: aquamarine; */
	margin: auto;
`;

export const Title = styled.div`
	margin-top: 60px;
	text-align: center;
	font-size: 36px;
	font-weight: 700px;
	margin-bottom: 80px;
`;

export const InnerWrapper = styled.div`
	width: 100%;
	height: 1554px;
`;

export const Box_big3 = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 115px;
	margin-bottom: 40px;
`;

export const Left_div = styled.div`
	display: flex;
	flex-direction: column;
	width: 462px;
`;

export const Text = styled.div`
	width: 100%;
	height: 24px;
	margin-bottom: 16px;
	margin-top: 4px;
	font-size: 16px;
	font-weight: 500;
`;
export const Small_input = styled.input`
	width: 100%;
	height: 52px;
`;
export const Right_div = styled.div`
	display: flex;
	flex-direction: column;
	width: 486px;
`;

export const Index_div = styled.div`
	width: 100%;
	height: 92px;
	margin-bottom: 40px;
`;

export const Middle_input = styled.input`
	width: 100%;
	height: 52px;
`;

export const Contents = styled.div`
	width: 100%;
	height: 520px;
	margin-bottom: 16px;
`;

export const Contents_input = styled.textarea`
	width: 100%;
	height: 480px;
	line-height: 100%;
`;
export const Address_div = styled.div`
	height: 242px;
	width: 100%;
`;

export const Address_inner_div = styled.div`
	width: 100%;
	height: 218px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Search_address_div = styled.div`
	width: 100%;
	height: 52px;
	display: flex;
`;

export const Number_input = styled.input`
	width: 77px;
	height: 52px;
	margin-right: 32px;
	text-align: center;
`;

export const Search_button = styled.button`
	padding: 14px 16px;
	width: 124px;
	height: 52px;
	margin: 0px;
	color: white;
	font-size: 16px;
	background-color: black;
`;

export const Inner_div = styled.div`
	width: 100%;
	height: 134px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Youtube = styled.div`
	width: 100%;
	height: 81px;
	margin-top: 40px;
`;

export const Photo_div = styled.div`
	width: 282px;
	height: 118px;
	margin-top: 40px;
`;

export const Photo_box = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 78px;
`;
export const Photo_img = styled.button`
	width: 78px;
	height: 78px;
	background-color: gray;
	cursor: pointer;
`;

export const Option_div = styled.div`
	width: 100%;
	padding-top: 40px;
	margin-bottom: 55px;
`;

export const Radio_button = styled.input`
	cursor: pointer;
`;

export const Radio_text = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;

export const Upload_div = styled.div`
	width: 100%;
	height: 52px;
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
`;

export const Upload = styled.button`
	width: 179px;
	height: 52px;
	font-size: 16px;
	text-align: center;
	background-color: yellow;
	/* opacity: ${(props: IProps) => (props.active ? 1 : 0.1)}; */
`;

export const Error = styled.div`
	width: 100%;
	color: red;
	font-size: 12px;
`;
