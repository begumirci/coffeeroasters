import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FinalCheck from './components/FinalCheck';
import data from './data.json';

export const myContext = createContext(null);

function App() {
  const [isOkey, setIsOkey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    coffe: '...',
    type: '...',
    much: '...',
    grind: '...',
    often: '...',
  });
  const [grindOpen, setGrindOpen] = useState(true);
  const [isOpenDrop, setIsOpenDrop] = useState({
    coffe: true,
    type: false,
    much: false,
    grind: false,
    often: false,
  });
  const coffe = data.createchoose[0].coffe;
  const type = data.createchoose[0].type;
  const much = data.createchoose[0].much;
  const grind = data.createchoose[0].grind;
  const often = data.createchoose[0].often;

  const List = [
    {
      question: 'How do you drink your coffee?',
      items: coffe,
      key: 'coffe',
      selectNum: '01',
      selectName: 'Preferences',
    },
    {
      question: 'What type of coffee?',
      items: type,
      key: 'type',
      selectNum: '02',
      selectName: 'Bean Type',
    },
    {
      question: 'How much would you like?',
      items: much,
      key: 'much',
      selectNum: '03',
      selectName: 'Quantity',
    },
    {
      question: 'Want us to grind them?',
      items: grind,
      key: 'grind',
      selectNum: '04',
      selectName: 'Grind Option',
    },
    {
      question: 'How often should we deliver?',
      items: often,
      key: 'often',
      selectNum: '05',
      selectName: 'Deliveries',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  function up() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={isOpen || isOkey ? 'overflow' : ''}>
      <myContext.Provider
        value={{
          isOpen,
          setIsOpen,
          selected,
          setSelected,
          isOkey,
          setIsOkey,
          up,
          isOpenDrop,
          setIsOpenDrop,
          List,
          grindOpen,
          setGrindOpen,
        }}
      >
        <FinalCheck />
        <header className='container'>
          <Header />
        </header>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer className='container'>
          <Footer />
        </footer>
      </myContext.Provider>
    </div>
  );
}

export default App;
