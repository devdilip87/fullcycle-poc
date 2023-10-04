// Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='navList'>
          <li className='navItem'>
            <Link href="/">Home</Link>
          </li>
          <li className='navItem'>
            <Link href="/about">About</Link>
          </li>
          <li className='navItem'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
