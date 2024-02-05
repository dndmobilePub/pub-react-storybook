import React, { useEffect, useState } from "react";
import HisprecBtn from './HisprecBtn';
import BtnWrap from './BtnWrap';
import CloseButton from './CloseButton';

function ModalPop(props) {
  const [animate, setAni] = useState(false);

  useEffect(() => {
    if (props.modal === true) {
      const timer = setTimeout(() => {
        setAni(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAni(false);
    }
  }, [props.modal]);

  //let posTxt = props.postion.toLowerCase();
  const posTxt = props.postion ? props.postion.toLowerCase() : '';
  const modalPopTxt = props.targetPop ? props.targetPop.toLowerCase() : '';

  return (
    <div className={animate ? 'modalPop _is-active _' + posTxt : 'modalPop _' + posTxt} select-modal={'modalPop_' + modalPopTxt}>
      <div className="modalWrap">
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
    </div>
  );
}

export default ModalPop;