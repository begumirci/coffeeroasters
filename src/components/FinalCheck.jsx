import { useContext } from 'react';
import { myContext } from '../App';
import { Link } from 'react-router-dom';

export default function FinalCheck() {
  const { selected, isOkey, setIsOkey, grindOpen } = useContext(myContext);

  function handleClick() {
    if (isOkey) {
      setIsOkey(false);
      document.body.classList.remove('body-no-scroll');
    } else {
      setIsOkey(true);
    }
  }

  return (
    <div className={isOkey ? 'final-check' : 'unvisible'}>
      <div className='check-header'>
        <h1 className='normal-title'>Order Summary</h1>
      </div>
      <div className='check-body'>
        <div className='drink-summary'>
          “I drink my coffee as <span>{selected.coffe}</span>, with a{' '}
          <span>{selected.type}</span> type of bean.{' '}
          <span>{selected.much}</span> ground ala{' '}
          <span>{grindOpen ? selected.grind : ''}</span>, sent to me{' '}
          <span>{selected.often}</span>
          .”
        </div>
        <p className='normal-font'>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <Link
          to='/subscribe'
          className='create-btn mobil-btn'
          onClick={handleClick}
        >
          Checkout - $14.00 / mo
        </Link>
        <Link
          to='/subscribe'
          className='create-btn tablet-btn'
          onClick={handleClick}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
