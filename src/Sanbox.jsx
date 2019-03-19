import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./button/Button";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleSubmit = () => closeModal;
  return (
    <>
      <Button onClick={openModal}>Show modal</Button>
      <Modal
        title="Test Dialog window"
        isOpen={isOpen}
        onCancel={closeModal}
        onSubmit={handleSubmit}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a
        </p>
      </Modal>
    </>
  );
};
export default ModalComponent;
