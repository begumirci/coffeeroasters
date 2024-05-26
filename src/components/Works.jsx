import data from '../data.json';

export function Works() {
  const myData = data.howworks;
  return (
    <div className='how-works'>
      <h1 className='normal-title'>How it works</h1>

      <div className='works-infos'>
        {myData.map((x, index) => (
          <div key={index} className='circle-container'>
            <p className='circle'></p>
            <h2>{x.number}</h2>

            <div className='works-info'>
              <h3>{x.name}</h3>
              <p className='normal-font'>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href='#' className='create-btn'>
        Create your plan
      </a>
    </div>
  );
}

export function SubWork() {
  const myData = data.howworks;
  return (
    <div className='works-infos dark-white'>
      {myData.map((x, index) => (
        <div key={index} className='circle-container'>
          <p className='circle'></p>
          <h2>{x.number}</h2>

          <div className='works-info'>
            <h3>{x.name}</h3>
            <p className='normal-font'>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
