import { SearchInput } from "../../board/list/BoardList.styles";
import { SearchButton } from "../../board/write/BoardWrite.styles";
import {
  RightWrapper,
  RightWrapperHead,
  TopText,
  RightWrapperBody,
} from "./myPoint.styles";

import MyPointOfSellingUI from "./myPointOfSelling.presenter";
import MyPointOfLoadingUI from "./myPointOfLoading.presenter";
import MyPointOfBuyingUI from "./myPointOfBuying.presenter";
import MyPointOfAllUI from "./myPointOfAll.presenter";
import { ImyPointUIProps } from "./myPoint.types";

export default function myPointUI(props: ImyPointUIProps) {
  return (
    <RightWrapper>
      <RightWrapperHead>
        <TopText
          id="all"
          onClick={props.onClickMenu}
          // @ts-ignore
          isActive={props.activedPage === "all"}
        >
          전체내역
        </TopText>
        <TopText
          id="loading"
          onClick={props.onClickMenu}
          // @ts-ignore
          isActive={props.activedPage === "loading"}
        >
          충전내역
        </TopText>
        <TopText
          id="buying"
          onClick={props.onClickMenu}
          // @ts-ignore
          isActive={props.activedPage === "buying"}
        >
          구매내역
        </TopText>
        <TopText
          id="selling"
          onClick={props.onClickMenu}
          // @ts-ignore
          isActive={props.activedPage === "selling"}
        >
          판매내역
        </TopText>
        <div style={{ marginLeft: "auto" }}>
          <SearchInput
            placeholder="# 검색하기"
            onChange={props.onChangeSearch}
            ref={props.inputRef}
          />
        </div>
      </RightWrapperHead>
      <RightWrapperBody>
        {props.activedPage === "all" && (
          <MyPointOfAllUI allData={props.allData} keyword={props.keyword} />
        )}
        {props.activedPage === "loading" && (
          <MyPointOfLoadingUI
            LoadingData={props.LoadingData}
            keyword={props.keyword}
          />
        )}
        {props.activedPage === "buying" && (
          <MyPointOfBuyingUI
            BuyingData={props.BuyingData}
            keyword={props.keyword}
          />
        )}
        {props.activedPage === "selling" && (
          <MyPointOfSellingUI
            SellingData={props.SellingData}
            keyword={props.keyword}
          />
        )}
      </RightWrapperBody>
    </RightWrapper>
  );
}
