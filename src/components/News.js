import TopLinks from './TopLinks';
import TopLink from './TopLink';
/** News - блок списка новостей над окном поиска  */
function News({children}) {
  const TopLinkProps={
    text: "TopLink",
    link: ""
  } 
  return (
    <div className = "block newsblock">
      <span>News</span>
      <TopLinks>
        <TopLink {...TopLinkProps} />
        <TopLink {...TopLinkProps} />
        <TopLink {...TopLinkProps} />
      </TopLinks>
      {children}
    </div>
    
  )
}
export {News as default}