import './App.css'
import UpinfoBlock from './components/UpinfoBlock'
import Search from './components/Search'
import Advert from './components/Advert'
import DownInfoBlock from './components/DownInfoBlock'

/** app - вывод полностью сформированной страницы */
function App() {
  return (
    <main className='block main-block'>
      <span>Main block</span>
      <UpinfoBlock />
      <Search />
      <Advert />
      <DownInfoBlock />
    </main>

  )
}

export { App as default }
