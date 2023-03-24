import SearchLinks from './SearchLinks';
import UnderSearchLink from './UnderSearchLink'
/** Search - компонент с окном поиска и верхним и нижним меню поиска  */
function Search() {
  const searchLinksProps={
    text: "searchLinkItem",
    link: ""
  }
  return (
     <div className="block">
       <SearchLinks {...searchLinksProps}/>
       <span>Search</span>
       <input />
       <UnderSearchLink {...searchLinksProps} text="UnderSearchLink"/>
    </div>
  )
}

export {Search as default}