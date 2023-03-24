import News from './News'
import NewsItem from './NewsItem'
import TopRightBlock from './TopRightBlock'
/** UpinfoBlock - вывод верхнего инфоблока (выше меню над полем поиска) */
function UpinfoBlock() {
  const newsItemProps={
    iconsrc: "",
    text: "NewsItem",
    link: ""
  }
  const topRightProps={
    imgsrc: "",
    header: "TopRightBlock",
    link: "",
    linktext: "Смотрите на Яндексе и запоминайте"
  }
  return (
    <div className="block rowblock upinfoblock">
        <News>
        <NewsItem {...newsItemProps}/>
        <NewsItem {...newsItemProps}/>
        <NewsItem {...newsItemProps}/>
      </News>
      <TopRightBlock {...topRightProps}/>
    </div>
  )
}

export { UpinfoBlock as default }