import { myContext } from '../App';

import down from '../images/down.svg';
import { useContext, useEffect } from 'react';

export default function CreateCoffe() {
  const {
    selected,
    setSelected,
    isOpenDrop,
    setIsOpenDrop,
    List,
    setIsOkey,
    grindOpen,
    setGrindOpen,
  } = useContext(myContext);

  function handleSelect(optionType, optionName) {
    if (optionType == 'coffe' && optionName == 'Capsule') {
      setIsOpenDrop({ ...isOpenDrop, grind: false });
      console.log('yess');
      setGrindOpen(false);
    }
    setSelected({ ...selected, [optionType]: optionName });
  }

  console.log(selected);

  function handleSetOpen(dropName) {
    setIsOpenDrop({ ...isOpenDrop, [dropName]: !isOpenDrop[dropName] });
  }
  console.log(isOpenDrop);
  useEffect(() => {
    if (Object.values(selected).every((x) => x !== '...')) {
      setIsOkey(true);
    } else {
      setIsOkey(false);
    }
  }, [selected]);

  return (
    <div className='create-coffe'>
      {List.map((x) => (
        <div key={x.key} id={x.key}>
          <div
            className='question'
            onClick={() => handleSetOpen(x.key)}
            style={{
              pointerEvents:
                grindOpen == false && x.key == 'grind' ? 'none' : 'auto',
              opacity: grindOpen == false && x.key == 'grind' ? '0.464' : '',
            }}
          >
            <h2>{x.question}</h2>
            <img
              src={down}
              alt=''
              style={{ cursor: 'pointer' }}
              className={isOpenDrop[x.key] ? 'rotate' : ''}
            />
          </div>
          <div className='answers'>
            {x.items.map((item, index) => (
              <div
                key={x.id}
                className={isOpenDrop[x.key] ? 'answer ' : 'answer unvisible  '}
                onClick={() => handleSelect(x.key, item.name)}
                style={{
                  background: selected[x.key] == item.name ? '#0e8784' : '',
                  color: selected[x.key] == item.name ? '#ffff' : '',
                  '--i': index,
                }}
              >
                <h3 className='normal-title'>{item.name}</h3>
                <p className='normal-font2'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
