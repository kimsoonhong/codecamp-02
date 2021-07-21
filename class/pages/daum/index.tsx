import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "antd/lib/modal/Modal";

export default function daum() {
  const [isopen, setIsopen] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  function onClickSubmit() {
    setIsopen(true);
  }

  function OnClose() {
    setIsopen(false);
  }

  function onComplete(data) {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
  }

  function onChangeDetail(event) {
    console.log(event.data);
  }

  function onClickOpenModal(event) {
    setIsopen(true);
  }

  function onClickCancel() {
    setIsopen(false);
  }

  return (
    <div>
      {isopen && (
        <Modal title="주소검색하기" visible={true} onCancel={onClickCancel}>
          주소검색
          <DaumPostcode animation onComplete={onComplete} />
        </Modal>
      )}
      ;<button onClick={onClickOpenModal}>주소검색하기</button>
      <input value={address} readOnly />
      <input value={zonecode} readOnly />
      <input onChange={onChangeDetail} />
    </div>
  );
}
