
// 이전버튼
import Hisprec from './Hisprec'
// Modalfooter Btn 
import BtnWrap from './BtnWrap'
import CloseBtn from './CloseBtn'

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
            (postionTxt === 'bottom') ? null : <Hisprec />
          }
          <h1 className="mp-title dep01">{postionTxt} Modal</h1>
          <CloseBtn setModal={props.setModal} setAni={props.setAni}/>
        </div>
        <div className="modal-container">

          <p 
            style={
              postionTxt === 'bottom' ? {
                height: 100 + 'px',
                background: 'yellow' 
              } : null
            }
          >{postionTxt} Modal Content</p>
        </div>
        <div className="modal-footer">
          <BtnWrap setModal={props.setModal} postion={postionTxt}/>
        </div>
      </div>
    </div>
 
  )
}


export default ModalPop;