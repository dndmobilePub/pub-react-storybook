
// 이전버튼
import HisprecBtn from './HisprecBtn'

import BtnWrap from './BtnWrap'
import CloseButton from './CloseButton';


function ModalPop(props){

   // 문자열 소문자로 변경
   let postionTxt  = props.postion.toLowerCase();

  return(
    <div className={
      props.Ani === true ? 'modalPop _is-active _' + postionTxt : 'modalPop _' + postionTxt 
      } 
      select-target="modal1"
    >
      <div className="modalWrap">
        <div className="modal-header">
          {/* center&bottom 일경우 이전페이지 버튼 숨기기 */}
          {
            (postionTxt === 'center') ? null :
            (postionTxt === 'bottom') ? null : <HisprecBtn />
          }
          <h1 className="mp-title dep01">{postionTxt} Modal</h1>
          <CloseButton setModal={props.setModal} setAni={props.setAni}/>
        </div>
        <div className="modal-container">
          {props.popupData}
          {/* <p 
            style={
              postionTxt === 'bottom' ? {
                height: 100 + 'px',
                background: 'yellow' 
              } : null
            }
          >{postionTxt} Modal Content</p> */}
        </div>
        <div className="modal-footer">
          <BtnWrap setModal={props.setModal} postion={postionTxt}/>
        </div>
      </div>
    </div>
 
  )
}


export default ModalPop;