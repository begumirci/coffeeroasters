import data from '../data.json';

export default function Info() {
  const myData = data.info;
  return (
    <div className='info'>
      <div className='bg-bottom'>
        <div className='bg-top'>
          <h1>Why choose us?</h1>
          <p className='normal-font'>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>

      <div className='info-carts'>
        {myData.map((x, index) => (
          <div key={index} className='info-cart'>
            <img src={x.images} alt='' />
            <div>
              <h2 className='normal-title'>{x.name}</h2>
              <p className='normal-font'>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
