import { gql, useMutation, useQuery } from "@apollo/client";

const FECTH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function apolloCacheStatePage() {
  const { data } = useQuery(FECTH_BOARD);
  const [deleteboard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId) => async () => {
    try {
      await deleteboard({
        variables: {
          boardId: boardId,
        },
        // refetchQueries: [{ query: FECTH_BOARD }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.deleteBoard}`;
                });

                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span style={{ margin: "40px" }}>{data.writer}</span>
          <span style={{ margin: "40px" }}>{data.title}</span>
          <span style={{ margin: "40px" }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>삭제하기</button>
        </div>
      ))}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
