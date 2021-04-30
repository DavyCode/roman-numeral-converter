import React, { Fragment }  from 'react';
import classes from './converter.module.css';

function Converter() {
  return (
    <Fragment>
      <section className={classes.wrapper}>
        <h1 className={classes.title}>Convert Numbers to Roman Numerals</h1>
        <p className={classes.subtitle}>Quickly convert from base 10 Arabic to Roman numerals.</p>
        <p className={classes.error}>Please enter an integer greater than 0 and less than 4000.</p>

        <input className="text-input" type="text" placeholder="2020" />
        <p className={classes.result}>= MMXX</p>
      </section>
      <section className={classes.wrapper}>
        <h1 className={classes.title}>Convert Roman Numerals to Numbers</h1>
        <p className={classes.subtitle}>Quickly convert from base 10 Arabic to Roman numerals.</p>
        <p className={classes.error}>Please enter an integer greater than 0 and less than 4000.</p>

        <input className="text-input" type="text" placeholder="2020" />
        <p className={classes.result}>= MMXX</p>
      </section>
    </Fragment>
  );
}

export default Converter;