import React from 'react';
import { useModal } from './ModalContext';

function Modal() {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div>
      <div>모달 창입니다.</div>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}

export default Modal
