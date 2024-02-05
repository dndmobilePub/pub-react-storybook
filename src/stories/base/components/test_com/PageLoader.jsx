import React, { useEffect } from "react";
import useModal from "../js/useModal";
import Dimmed from "../popup/Dimmed";
import ModalPop from "../popup/ModalPop";

function PageLoader(props) {
  const { page, Component, modal, postion, targetPop, openModal, setPage, setComponent, setModal, setPostion, setTargetPop } = useModal();

  useEffect(() => {
    import(`./Txt${page}`).then((module) => {
      setComponent(() => module.default);
    });
  }, [page]);

  return (
    <div className='cp-content storybook'>
      <div className="btnWrap">
        <button className="btn btn-size md bg _modalBtn" data-value="Center" data-modal="About" onClick={openModal}>
          About
        </button>
        <button className="btn btn-size md bg _modalBtn" data-value="left" data-modal="Page" onClick={openModal}>
          Page
        </button>
        <button className="btn btn-size md bg _modalBtn" data-value="top" data-modal="Test" onClick={openModal}>
          Test
        </button>
      </div>
      {modal && <ModalPop Component={Component} postion={postion} modal={modal} setModal={setModal} targetPop={targetPop} />}
      {modal && <Dimmed />}
    </div>
  );
}

export default PageLoader;
