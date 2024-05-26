export default function Banner({
  title,
  description,
  image,
  btn,
  tabletimg,
  mainimg,
}) {
  console.log(tabletimg);
  console.log(image);
  return (
    <div className='banner'>
      <img className='mobil-img' src={image} alt='' />
      <img className='tablet-img' src={tabletimg} alt='haha' />
      <img className='main-img' src={mainimg} alt='' />
      <div className='banner-info'>
        <h1>{title}</h1>
        <p className='normal-font'>{description}</p>
        {btn}
      </div>
    </div>
  );
}
