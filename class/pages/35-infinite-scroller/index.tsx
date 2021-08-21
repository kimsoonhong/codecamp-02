import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      contents
      _id
    }
  }
`;

export default function scroller() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  // console.log(data);
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            기다료봐아~
          </div>
        }
      >
        {data?.fetchBoards.map((data) => (
          <div key={data._id} style={{ display: "flex", flexDirection: "row" }}>
            <div>{data._id}</div>
            <div>{data.writer}</div>
            <div>{data.title}</div>
            <div>{data.contents}</div>
            <div></div>
            <div></div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
