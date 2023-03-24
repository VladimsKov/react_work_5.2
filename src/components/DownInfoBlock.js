import DownColumnBlock from './DownColumnBlock';
import DownColumnItem from './DownColumnItem';
import DownColumnElLink from './DownColumnElLink';
/** DownInfoBlock - нижний блок колонок */
function DownInfoBlock() {
  const downColumnProps= {
    header: "DownColumnItem",
    headerlink: "",
    content: "",
  };
  const downElLinkProps= {
    text:"DownColumnElLink",
    link:""
  }
  const content_1 = [
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
  ];
  const content_2 = [
    <DownColumnElLink {...downElLinkProps}/>,    
  ];
  const content_3 = [
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
  ];
  const content_4 = [
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
    <DownColumnElLink {...downElLinkProps}/>,
  ];
  const content_5 = [
    <DownColumnElLink {...downElLinkProps}/>,    
  ];
    
    
  //<div className="block rowblock downinfoblock">
   //</div> 
  return (       
       <div className="block rowblock downinfoblock">   
      <DownColumnBlock>
        <DownColumnItem {...downColumnProps} header="Погода" content={content_1}/>
        <DownColumnItem {...downColumnProps} header="Посещаемое" content={content_2}/>
      </DownColumnBlock>
        <DownColumnBlock>
        <DownColumnItem {...downColumnProps} header="Карта Германии" content={content_3}/>
        <DownColumnItem {...downColumnProps} header="Телепрограмма" content={content_4}/>
      </DownColumnBlock>
        <DownColumnBlock>
        <DownColumnItem {...downColumnProps} header="Эфир" content={content_5}/>             </DownColumnBlock>
      </div>  
  )
}

export {DownInfoBlock as default}