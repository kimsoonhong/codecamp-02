import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        name
      }
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const isEdit = true;

  return <MarketWrite isEdit={isEdit} data={data} />;
}
