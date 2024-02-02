function BtnWrap(props){
  return(
    <div className="btnWrap grow">
      <button className={ 
        props.postionTxt === 'center' ? 'btn btn-size md type2 bg btn-close-pop' : 'btn btn-size md type2 bg' 
      }
        onClick={()=>{
          props.setModal(false)
        }}
      >확인</button>
      {
        props.postionTxt === 'center' ? null : 
        <button className="btn btn-size md bg btn-close-pop"
          onClick={(()=>{
            props.setModal(false)
          })}
        >취소</button>
      }
      
    </div>
  )
}

export default BtnWrap