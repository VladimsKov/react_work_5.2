import SearchLinkItem from './SearchLinkItem';
/** SearchLinks - гориз. ряд ссылок над окном поиска */
function SearchLinks(props) {
  return (         
    <ul className='block rowblock list'>
      <SearchLinkItem {...props}/>
     <SearchLinkItem {...props}/>
     <SearchLinkItem {...props}/>
    </ul> 
     )  
}
export {SearchLinks as default}