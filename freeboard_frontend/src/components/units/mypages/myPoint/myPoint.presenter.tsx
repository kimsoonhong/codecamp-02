import { SearchInput } from "../../board/list/BoardList.styles";

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
          // @ts-ignore
          <MyPointOfAllUI
            onClickPrevPage={props.onClickPrevPage}
            onClickPage={props.onClickPage}
            buyinglastPage={props.buyinglastPage}
            startpage={props.startpage}
            allData={props.allData}
            keyword={props.keyword}
            activedPages={props.activedPages}
          />
        )}
        {props.activedPage === "loading" && (
          // @ts-ignore
          <MyPointOfLoadingUI
            LoadingData={props.LoadingData}
            keyword={props.keyword}
            onClickPrevPage={props.onClickPrevPage}
            onClickPage={props.onClickPage}
            loadinglastPage={props.loadinglastPage}
            startpage={props.startpage}
            activedPages={props.activedPages}
          />
        )}
        {props.activedPage === "buying" && (
          // @ts-ignore
          <MyPointOfBuyingUI
            BuyingData={props.BuyingData}
            keyword={props.keyword}
            onClickPrevPage={props.onClickPrevPage}
            onClickPage={props.onClickPage}
            buyinglastPage={props.buyinglastPage}
            startpage={props.startpage}
            activedPages={props.activedPages}
          />
        )}
        {props.activedPage === "selling" && (
          // @ts-ignore
          <MyPointOfSellingUI
            SellingData={props.SellingData}
            keyword={props.keyword}
            onClickPrevPage={props.onClickPrevPage}
            onClickPage={props.onClickPage}
            sellinglastPage={props.sellinglastPage}
            startpage={props.startpage}
            activedPages={props.activedPages}
          />
        )}
      </RightWrapperBody>
    </RightWrapper>
  );
}
