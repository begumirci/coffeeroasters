import data from '../data.json';

export default function Collections() {
  const myData = data.collection;
  return (
    <div className='collections'>
      {myData.map((x, index) => (
        <div key={index} className='collection-cart'>
          <img src={x.images} alt='' />
          <div className='collection-cart-info'>
            <h2 className='normal-title'>{x.name}</h2>
            <p className='normal-font'>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
