import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function optimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611dcacf2d1aa300298e6ef3" },
  });

  console.log(data, "<<<");

  const onClickLike = (likeCount) => () => {
    likeBoard({
      variables: { boardId: "611dcacf2d1aa300298e6ef3" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "611ce2362d1aa300298e6cb0" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: likeCount + 1,
      },
      update(cache, { data }) {
        // 캐쉬 직접수정 방법

        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611dcacf2d1aa300298e6ef3" },
          data: {
            fetchBoard: {
              _id: "611dcacf2d1aa300298e6ef3",
              __typename: "Board",

              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <div></div>
      <div>조하영:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
        조하영 + 1
      </button>
      <div></div>
    </div>
  );
}

//낙관적인 ui

//일단 먼져 캐쉬를 업데이트 > 화면에 뿌려줌 > 고로고 나서 업데이트를 요청 > 고다음 받아가지고 와서 캐쉬로 보낸 다음 > 캐쉬가 1이면 고대로 냅두고 > 혹시라도 실패했다면> 실패 결과를 가지고 다시 보여줌
//실패를 안했다고 가정하고 실행 > 좋아요 처럼 실패 가능성이 없거나, 실패해도 큰 문제가 없는경우 사용
// 결제 같은 중요한 로직에는 사용 자제

//캐시 직접수정

// connectToDevTools:true,
