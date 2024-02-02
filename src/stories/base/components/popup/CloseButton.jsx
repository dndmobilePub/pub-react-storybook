
function CloseButton(props){
  return(
    <a href="#/" className="btn-close-pop ico ico-pop-close" role="button"
      onClick={(e)=>{
        e.preventDefault()
        props.setModal(false)
        props.setAni(false)
      }}
    >
      <span className="hide">창닫기</span>
    </a>
  )
}

export default CloseButton