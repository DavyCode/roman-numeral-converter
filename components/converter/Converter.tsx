import React, { Fragment, useState, useRef, useEffect }  from 'react';
import classes from './converter.module.css';
import RomanNumerals from '../../helpers/RomanNumerals';

function Converter () {
  const [errorNumMsg, setErrorNumMsg] = useState(null);
  const [errorRomMsg, setErrorRomMsg] = useState(null);
  const [numInput, setNumInput] = useState(null);
  const [romInput, setRomInput] = useState(null);

  const numInputRef = useRef<HTMLInputElement>(null);
  const romInputRef = useRef<HTMLInputElement>(null);

  function handleNumInputChange() {
    if (numInputRef.current && numInputRef.current.value) {
      const input: string = numInputRef.current.value;
      if (isNaN(Number(input))){
        setErrorNumMsg('Enter an actual number');
        return
      }
      if (String(input).length < 5 && Number(input) < 5000) {
        setNumInput(Number(input));
        setErrorNumMsg(null)
      }
      else {
        setErrorNumMsg('Only numbers up to 4999 are supported.');
      }
    }
    else {
      setNumInput(null);
      setErrorNumMsg(null);
    }
  }
  function handleRomInputChange() {
    if (romInputRef.current && romInputRef.current.value) {
      const input: any = romInputRef.current.value;
      if (isNaN(input)){
        setRomInput(String(input));
        setErrorRomMsg(null);
      }
      else {
        setErrorRomMsg('Number is not allowed');
      }
    }
    else {
      setRomInput(null);
      setErrorRomMsg(null);
    }
  }

  function convertToRom() {
    if (numInput) {
      const romanResult: string = RomanNumerals.toRoman(numInput);
      return (<p className={classes.result}>={romanResult}</p>)
    }
    return (<p className={classes.placeholder}>=MCMXC</p>)
  }

  function convertToNum() {
    if (romInput) {
      const numResult: number = RomanNumerals.fromRoman(romInput);
      return (<p className={classes.result}>={numResult}</p>)
    }
    return (<p className={classes.placeholder}>=2020</p>);
  }
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
        <input className="text-input" type="text" placeholder="1990" ref={numInputRef} onChange={handleNumInputChange}/>
        {convertToRom()}
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
        <input className="text-input" type="text" placeholder="MMXX" ref={romInputRef} onChange={handleRomInputChange}/>
        {convertToNum()}
      </section>
    </Fragment>
  );
}

export default Converter;