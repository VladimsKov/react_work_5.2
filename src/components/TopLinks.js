/** TopLinks - верхняя строка ссылок */
function TopLinks({children}) {
  return (
    <div className='block rowblock'>
      <span>TopLinks</span>
      {children}
    </div>    
  )
}

export {TopLinks as default}