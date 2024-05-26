import { useContext, useState } from 'react';
import { myContext } from '../App';

export default function CreatecoffeHelper() {
  const { isOpenDrop, setIsOpenDrop, List, grindOpen } = useContext(myContext);
  const [isActive, setIsActive] = useState('coffe');

  function handleChange(name) {
    setIsActive(name);
    setIsOpenDrop({ ...isOpenDrop, [name]: true });
  }
  return (
    <ul className='options-ul'>
      {List.map((x) => (
        <li
          key={x.key}
          onClick={() => handleChange(x.key)}
          style={{
            opacity: grindOpen == false && x.key == 'grind' ? '0.464' : '',
          }}
        >
          <a
            href={`#${x.key}`}
            className={isActive == x.key ? 'noneOpacity' : 'opacity'}
          >
            <span>{x.selectNum}</span>
            {x.selectName}{' '}
          </a>
        </li>
      ))}
    </ul>
  );
}
