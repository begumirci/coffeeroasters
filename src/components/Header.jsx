import { myContext } from '../App';
import logo from '../../public/logo.svg';
import menu from '../../public/menu.svg';
import close from '../../public/close.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isOpen, setIsOpen } = useContext(myContext);

  return (
    <div className='header'>
      <img src={logo} alt='' className='logo' />
      <nav className='header-nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/subscribe'>Create Your Plan</Link>
      </nav>
      <img
        src={isOpen ? close : menu}
        alt=''
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='header-img'
      />
    </div>
  );
}
