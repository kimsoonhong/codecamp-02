import Head from "next/head";

export default function boardPage() {
	return (
		<>
			<Head>
				<mata property="og:title" content="정적 게시판" />
				<mata property="og:description" content="이 주소는 정적 주소입니다." />
				<mata
					property="og:image"
					content="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAxNzEyMjZfMjIx%2FMDAxNTE0MjU2NDUxOTMw.ImgF9jtMTl9FCT5CnlfBh7GAAUJS-TFRi8pnTq5MTScg.Ht5wFhUVufVdtxilpnjDI0xd_3WmNcbQNnh_IYI3jnIg.JPEG.soon7268%2FIMG_9259.jpg%3Ftype%3Dw800&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fsoon7268%2F221171228370&tbnid=kBpQvizajb1gwM&vet=12ahUKEwjp9I2jyMjyAhWCQN4KHYP4BBAQMygAegUIARDLAQ..i&docid=r-6EyqEAtEo_bM&w=740&h=462&q=%EC%9A%B0%EC%A3%BC%EC%82%AC%EC%A7%84&ved=2ahUKEwjp9I2jyMjyAhWCQN4KHYP4BBAQMygAegUIARDLAQ"
				/>
			</Head>

			<div>여기는 게시판 입니다.</div>
		</>
	);
}
