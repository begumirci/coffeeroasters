import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../App';

export default function Navbar() {
  const { isOpen, setIsOpen } = useContext(myContext);
  return (
    <nav className={isOpen ? 'mobil-navbar inslide' : 'mobil-navbar  outslide'}>
      <Link to='/' className='normal-title' onClick={() => setIsOpen(!isOpen)}>
        Home
      </Link>
      <Link
        to='/about'
        className='normal-title'
        onClick={() => setIsOpen(!isOpen)}
      >
        About Us
      </Link>
      <Link
        to='/subscribe'
        className='normal-title'
        onClick={() => setIsOpen(!isOpen)}
      >
        Create Your Plan
      </Link>
    </nav>
  );
}
