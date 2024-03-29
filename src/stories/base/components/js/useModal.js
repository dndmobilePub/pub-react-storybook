// useModal.js
import { useState } from 'react';

export default function useModal() {
  const [page, setPage] = useState('');
  const [Component, setComponent] = useState(null);
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useState(null); // 수정된 변수명
  const [targetPop, setTargetPop] = useState(null);

  const openModal = (e) => {
    const pos = e.target.getAttribute('data-value');
    const pageName = e.target.getAttribute('data-modal');
    setPosition(pos.toLowerCase());
    setTargetPop(pageName);
    setPage(pageName);
    setModal(true);
    console.log(e.target.getAttribute('data-value'))
  };

  return { page, Component, modal, position, targetPop, openModal, setPage, setComponent, setModal, setPosition, setTargetPop }; // 수정된 변수명
}
