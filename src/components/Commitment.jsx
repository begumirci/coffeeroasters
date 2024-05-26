import commitImg from '../images/commitment.jpg';
import commitTablet from '../images/Bitmaptablet-commit.jpg';
import commitMain from '../images/main-commit.jpg';

export default function Commitment() {
  return (
    <div className='commitment'>
      <img className='mobil-img' src={commitImg} alt='' />
      <img className='tablet-img' src={commitTablet} alt='' />
      <img className='main-img' src={commitMain} alt='' />
      <div>
        <h1>Our commitment</h1>
        <p className='normal-font'>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
}
