import { useContext } from 'react';
import { myContext } from '../App';

export default function FinalCheck() {
  const { selected, isOkey } = useContext(myContext);

  return (
    <div className={isOkey ? 'final-check' : 'unvisible'}>
      <div className='check-header'>
        <h1 className='normal-title'>Order Summary</h1>
      </div>
      <div className='check-body'>
        <div className='drink-summary'>
          “I drink my coffee as <span>{selected.coffe}</span>, with a{' '}
          <span>{selected.type}</span> type of bean.{' '}
          <span>{selected.much}</span> ground ala <span>{selected.grind}</span>,
          sent to me <span>{selected.often}</span>
          .”
        </div>
        <p className='normal-font'>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <button className='create-btn mobil-btn'>Checkout - $14.00 / mo</button>
        <button className='create-btn tablet-btn'>Checkout</button>
      </div>
    </div>
  );
}
