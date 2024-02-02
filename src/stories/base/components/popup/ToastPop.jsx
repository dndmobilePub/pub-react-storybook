
function ToastPop(){
  return(
    <div className='toastWrap' role='alert' aria-live="assertive" tabIndex={0}>
      <div className='toast-msg'>토스트팝업메시지를 출력</div>
      <a href="#/" className='btn icon-close' aria-label='Close' tabIndex={-1}
        onClick={(e)=>e.preventDefault()}
      >
        <span className='hide'>토스트팝업닫기</span>
      </a>
    </div>
  )
}


export default ToastPop