// useModal.js
import { useState } from 'react';

export default function useModal() {
  const [page, setPage] = useState('');
  const [Component, setComponent] = useState(null);
  const [modal, setModal] = useState(false);
  const [postion, setPostion] = useState(null);
  const [targetPop, setTargetPop] = useState(null);

  const openModal = (e) => {
    const pageName = e.target.getAttribute('data-modal');
    setPostion(e.target.dataset.value);
    setTargetPop(pageName);
    setPage(pageName);
    setModal(true);
  };

  return { page, Component, modal, postion, targetPop, openModal, setPage, setComponent, setModal, setPostion, setTargetPop };
}
