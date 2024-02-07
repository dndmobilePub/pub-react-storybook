// ModalPop.jsx
import React, { useEffect, useState, useRef } from "react";
import HisprecBtn from './HisprecBtn';
import BtnWrap from './BtnWrap';
import CloseButton from './CloseButton';

// scss import
import '../../scss/cm.common.scss';
import '../../scss/_cp.popup.scss';

function ModalPop(props) {
  const [animate, setAni] = useState(false);
  const [modalWidth, setModalWidth] = useState(null);
  const [modalHeight, setModalHeight] = useState(null);
  const modalRef = useRef(null);  

  useEffect(() => {
    if (props.modal === true) {
      const timer = setTimeout(() => {
        setAni(true);
        if (props.dataValue && modalRef.current) { // 수정된 부분: props.position 대신 props.dataValue 사용
          const modalW = modalRef.current.offsetWidth;
          const modalH = modalRef.current.offsetHeight;
          setModalWidth(modalW);
          setModalHeight(modalH);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAni(false);
    }
  }, [props.modal, props.dataValue]); // 수정된 부분: props.position 대신 props.dataValue 사용

  const posTxt = props.dataValue ? props.dataValue.toLowerCase() : ''; // 수정된 부분: props.position 삭제
  const modalPopTxt = props.targetPop ? props.targetPop.toLowerCase() : '';

  return (
    <div className={animate ? 'modalPop _is-active _' + posTxt : 'modalPop _' + posTxt} select-modal={'modalPop_' + modalPopTxt}>
      <div className="modalWrap" ref={modalRef}>
        <div className="modal-header">
          {(posTxt === 'center') ? null :
            (posTxt === 'bottom') ? null : <HisprecBtn />}
          <h1 className="mp-title dep01">{posTxt} Modal</h1>
          <CloseButton setModal={props.setModal} setAni={props.setAni} />
        </div>
        <div className="modal-container">
          {props.Component ?
            <props.Component /> :
            <p style={posTxt === 'bottom' ? { height: 100 + 'px', background: 'yellow' } : null}>{posTxt} Modal Content</p>
          }
        </div>
        <div className="modal-footer">
          <BtnWrap setModal={props.setModal} position={posTxt} />
        </div>
      </div>
      <style jsx>{`
        .modalPop._center {
          margin-top: ${modalHeight ? -modalHeight / 2 + 'px' : null};
          margin-left: ${modalWidth ? -modalWidth / 2 + 'px' : null};
        }
      `}</style>
    </div>
  );
}

export default ModalPop;
