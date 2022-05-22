import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styles from '../component/textarea.module.css';

const TextArea = ({ handleKeyDown, textInput, currentInput, handleChange, status, handleStart, minutes}) => {
  return (
    <div className={styles.textarea}>
    <TextareaAutosize
      className={styles.area}
      aria-label="maximum height"
      placeholder="You can type here"
      style={{ height: 200 }}
      onKeyDown={handleKeyDown}
      value={currentInput}
      onChange={handleChange}
      ref={textInput}
      disabled={status !== "started" || status === "finished"}
    />
    <br />
    <div className={styles.buttoncontainer}>
      <button disabled={!minutes} className={styles.button} onClick={handleStart}>CHALLENGE</button>
    </div>
    </div>
  );
}

export default TextArea;