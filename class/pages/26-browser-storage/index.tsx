export default function browserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=짱구";
    document.cookie = "ccc=맹구";
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onLoadCookie = () => {
    // document.cookie = "aaa=철수";
    let asdf;
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("bbb=")) asdf = data;
    });
    console.log(asdf.split("=")[1]);
    // console.log(document.cookie);
  };
  const onLoadLocalStorage = () => {
    // localStorage.setItem("bbb", "영희");
    const bbbb = localStorage.getItem("bbb");
    console.log("bbbb", bbbb);
  };
  const onLoadSessionStorage = () => {
    // sessionStorage.setItem("ccc", "훈이");
    const cccc = sessionStorage.getItem("ccc");
    console.log("cccc", cccc);
  };

  return (
    <div
      style={{
        padding: "60px",
        width: "500px",
        height: "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <button onClick={onSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onSaveSessionStorage}>세션스토리지에 저장하기</button>
      <div></div>
      <div></div>
      <div>하하==========================================</div>
      <button onClick={onLoadCookie}>쿠키불러오기</button>
      <button onClick={onLoadLocalStorage}>로컬스토리지 불러오기</button>
      <button onClick={onLoadSessionStorage}>세션스토리지 불러오기</button>
    </div>
  );
}
