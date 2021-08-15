import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

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

  const [imgData, setImgData] = useState();

  useEffect(() => {
    if (data?.fetchUseditem?.images?.length)
      setImgData(
        [...data?.fetchUseditem.images].map(
          (data) => `https://storage.googleapis.com/${data}`
        )
      );
  }, [data?.fetchUseditem.images]);

  return <MarketWrite isEdit={isEdit} data={data} imgData={imgData} />;
}
