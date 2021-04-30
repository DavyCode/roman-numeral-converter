import React, { Fragment, useState, useRef }  from 'react';
import classes from './converter.module.css';

function Converter() {
  const [errorNumMsg, setErrorNumMsg] = useState(null);
  const [errorRomMsg, setErrorRomMsg] = useState(null);

  return (
    <Fragment>
      <section className={classes.wrapper}>
        <h1 className={classes.title}>Convert Numbers to Roman Numerals</h1>
        <p className={classes.subtitle}>Convert from base 10 Arabic to Roman numerals.</p>
        {errorNumMsg ? (
            <p className={classes.error}>Error: {errorNumMsg}</p>
          ) : (
            <p className={classes.info}>Enter a number greater than 0 (maximum: 4999)</p>
          )
        }        

        <input className="text-input" type="text" placeholder="1990" />
        <p className={classes.result}>= MCMXC</p>
      </section>
      <section className={classes.wrapper}>
        <h1 className={classes.title}>Convert Roman Numerals to Numbers</h1>
        <p className={classes.subtitle}>Convert from Roman Numerals base 10 Arabic.</p>
        {errorRomMsg ? (
            <p className={classes.error}>Error: {errorRomMsg}</p>
          ) : (
            <p className={classes.info}>Enter a Roman numeral (e.g. XIV)</p>
          )
        } 
        <input className="text-input" type="text" placeholder="MMXX" />
        <p className={classes.result}>= 2020</p>
      </section>
    </Fragment>
  );
}

export default Converter;