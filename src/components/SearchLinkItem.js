/** SearchLinkItem - элемент ссылки из гориз. ряда над окном поиска */
function SearchLinkItem(props) {
  return (
    <li className='block'>{props.text}</li>
  )
}

export {SearchLinkItem as default}