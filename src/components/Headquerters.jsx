import data from '../data.json';
export default function Headquerters() {
  const myData = data.headquerters;
  return (
    <div className='headquerters'>
      <h1 className='normal-title'>Our headquarters</h1>
      <div className='headquerter-infos'>
        {myData.map((x, index) => (
          <div key={index} className='headquerter-info'>
            <img src={x.images} alt='' />
            <h3>{x.name}</h3>
            <div className='address'>
              <span className='normal-font2'>{x.span1}</span>
              <span className='normal-font2'>{x.span2}</span>
              <span className='normal-font2'>{x.span3}</span>
              <span className='normal-font2'>{x.span4}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
