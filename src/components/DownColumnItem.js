/** DownColumnItem - вывод элемента колонки нижнего блока */
function DownColumnItem(props) {
  const data = props.content
  return (
    <ul className='block list'>{props.header}
      {data.map(item => item)}
    </ul>
  )  
}

export {DownColumnItem as default}