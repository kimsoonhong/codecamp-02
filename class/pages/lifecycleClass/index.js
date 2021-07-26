import { Component, createRef } from "react";
import Router from "next/router";

export default class lifecycleClasspage extends Component {
  state = {
    count: 0,
    aaa: 1,
  };

  inputRef = createRef();

  componentDidMount() {
    console.log("마운트 완료!");
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("컴포넌트 변경됨!");
  }

  componentWillUnmount() {
    alert("잘가요~ㅠㅠ");
  }

  onClickCount = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <div>클래스형 컴퍼넌트 입니다.</div>
        <div>count : {this.state.count}</div>
        <button onClick={this.onClickCount}>+1</button>
        <button onClick={this.onClickMove}>잘가요 페이지</button>
        <input type="password" ref={this.inputRef}></input>
      </div>
    );
  }
}
