import coffe from '../../public/coffe.jpg';
import qualityMain from '../../public/quality-main.png';

export default function Quality() {
  return (
    <div className='quality'>
      <img className='quality-img' src={coffe} alt='' />

      <div className='bg-quality'>
        <div>
          <h1> Uncompromising quality</h1>
          <p className='normal-font'>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <img className='main-img' src={qualityMain} alt='' />
      </div>
    </div>
  );
}
