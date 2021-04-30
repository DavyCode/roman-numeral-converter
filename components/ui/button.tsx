import Link from 'next/link';

import classes from './button.module.css';

function Button(props: any) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  if (props.classes) {
    return (
      <button className={props.classes} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
