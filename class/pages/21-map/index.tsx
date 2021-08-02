export default function mapPage() {
  // ["철수", "영희", "훈이", "짱구"].map((data, index) => {
  //   console.log(data, index);
  //   console.log(index);
  //   return data+'어린이';
  // });

  ["철수", "영희", "훈이", "짱구"].map((index, data) => {
    console.log(data, index);
    console.log(index);
    return true;
  });

  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
