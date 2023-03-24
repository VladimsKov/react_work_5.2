/** DownColumnBlock - вывод колонки нижнего блока */
function DownColumnBlock({children}) {
  
  return (
    <div className="block downcolumnblock">
      <span>DownColumnBlock</span>
      {children}      
    </div>
  )  
}
export {DownColumnBlock as default}