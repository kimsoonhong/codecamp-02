import { request, gql } from "graphql-request";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import QuestionList from "../../../src/components/units/marketComment/questionList/questionList.container";
import QuestionWrite from "../../../src/components/units/marketComment/questionWrite/questionWrite.container";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export default function BoardsDetailPage(props: any) {
  return (
    <>
      <Head>
        <meta property="og:name" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:images"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <MarketDetail />
      <QuestionWrite />
      <QuestionList />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend02.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  return { props: { fetchUseditem: result.fetchUseditem } };
};
