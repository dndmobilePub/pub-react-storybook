// Modal.js
import React, { useEffect } from 'react';
import useModal from "./stories/base/components/js/useModal";
import Dimmed from "./stories/base/components/popup/Dimmed";
import ModalPop from "./stories/base/components/popup/ModalPop";
import Button from './stories/base/Button';

function ModalPopPage() {
  const { page, Component, modal, position, targetPop, openModal, setPage, setComponent, setModal, setPosition, setTargetPop } = useModal();

  useEffect(() => {
    if (page !== '') {
      import(`./popup/Lpop${page}`).then((module) => {
        setComponent(() => module.default);
      }).catch(error => {
        console.error(`Failed to load module for page: ${page}`, error);
      });
    }
  }, [page]);
  
  return (
    <div style={{width: '500px'}}>
      <div className="btnWrap">
        <Button
          label="modalBtn - Center"
          setPage="modal"
          dataValue="Center"
          dataModal="Page1"
          onClick={openModal}
        />
        <Button
          label="modalBtn - Top"
          setPage="modal"
          dataValue="top"
          dataModal="Page2"
          onClick={openModal}
        />
        <Button
          label="modalBtn - Left"
          setPage="modal"
          dataValue="left"
          dataModal="Page3"
          onClick={openModal}
        />
      </div>
      {modal && <ModalPop Component={Component} dataValue={position} modal={modal} setModal={setModal} targetPop={targetPop} jsx="true" />} {/* 수정된 부분 */}
      {modal && <Dimmed />}
    </div>
  );
}

export default ModalPopPage;