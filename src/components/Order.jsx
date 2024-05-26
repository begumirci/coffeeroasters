import { useContext } from 'react';
import { myContext } from '../App';

import Swal from 'sweetalert2';
export default function Order() {
  const { selected, setIsOkey, up, isOkey } = useContext(myContext);
  console.log(isOkey);

  function isFormCompleted(obj) {
    if (isOkey) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    if (Object.values(obj).every((x) => x !== '...')) {
      setTimeout(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
        });
      }, 100);
      up();
      setIsOkey(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! You have to fill in the blanks',
      });
      setIsOkey(false);
    }
  }

  return (
    <div className='summary-save'>
      <div className='order-summary'>
        <h1 className='normal-font2 '>Order Summary</h1>

        <div className='drink-summary'>
          “I drink my coffee as <span>{selected.coffe}</span>, with a{' '}
          <span>{selected.type}</span> type of bean.{' '}
          <span>{selected.much}</span> ground ala <span>{selected.grind}</span>,
          sent to me <span>{selected.often}</span>
          .”
        </div>
      </div>
      <a
        href=''
        onClick={() => isFormCompleted(selected)}
        className={
          isOkey
            ? 'create-btn summary-btn normal-color'
            : 'create-btn summary-btn default'
        }
      >
        Create my plan
      </a>
    </div>
  );
}
