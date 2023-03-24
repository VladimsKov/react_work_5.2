/** верхний правый блок контента */
function TopRightBlock(props) {
  return (
    <div className='block columnblock'  >
      <img src={props.imgsrc} alt=""/>
       <span>{props.header}</span>
       <span>{props.linktext}</span>
    </div>
   
  )  
}

export {TopRightBlock as default}