/** TopLink - вывод ссылки в верхней строке */
function TopLink(props) {
  return(
    <div className="block">
      <span>{props.text}</span>
    </div>
  )
}

export {TopLink as default}