import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>ROMAN-COV</div>
        </a>
      </Link>
    </header>
  );
}

export default MainHeader;