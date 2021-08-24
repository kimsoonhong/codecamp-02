import head from "next/head";

export default function boardPage() {
	return (
		<>
			<head>
				<mata property="og:title" content="정적 게시판" />
				<mata property="og:description" content="이 주소는 정적 주소입니다." />
				<mata
					property="og:image"
					content="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjZfMjIx/MDAxNTE0MjU2NDUxOTMw.ImgF9jtMTl9FCT5CnlfBh7GAAUJS-TFRi8pnTq5MTScg.Ht5wFhUVufVdtxilpnjDI0xd_3WmNcbQNnh_IYI3jnIg.JPEG.soon7268/IMG_9259.jpg?type=w800gi"
				/>
			</head>

			<div>여기는 게시판 입니다.</div>
		</>
	);
}
