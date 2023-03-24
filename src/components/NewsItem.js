/** NewsItem - компонент новости верхнего блока */
function NewsItem(props) {
  return(
    <div className="block">
      <span>{props.text}</span>
    </div>
  )
}
export {NewsItem as default}