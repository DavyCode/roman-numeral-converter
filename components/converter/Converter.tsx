import React, { Fragment, useState, useRef, useEffect }  from 'react';
import classes from './converter.module.css';
import RomanNumerals from '../../helpers/RomanNumerals';
console.log({RomanNumerals})
function Converter () {
  const [errorNumMsg, setErrorNumMsg] = useState(null);
  const [errorRomMsg, setErrorRomMsg] = useState(null);
  const [numInput, setNumInput] = useState(null);
  const [romInput, setRomInput] = useState(null);

  const numInputRef = useRef<HTMLInputElement>(null);
  const romInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log({ useEffect: numInputRef.current.value})
    setErrorNumMsg(null)

    // if(errorNumMsg) {
    //   setNumInput(null);
    // }
  }, [])
  console.log({numInput})
  console.log({romInput})
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
      const input: string = numInputRef.current.value;
      if (!isNaN(Number(input))){
        setErrorRomMsg('Number is not allowed');
        return        
      }
      //TODO- Validate here
      // if () {


      // }
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
        <p className={classes.result}>= 2020 -- {romInput}</p>
      </section>
    </Fragment>
  );
}

export default Converter;