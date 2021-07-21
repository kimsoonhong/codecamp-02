import Modal from "@material-ui/core/Modal";

export default function li4() {
  return (
    <Modal
      open={true}
      // onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>게시물이 정상적으로 등록되었다.</div>
    </Modal>
  );
}
