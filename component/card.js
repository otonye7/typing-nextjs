import * as React from 'react';
import Card from '@mui/material/Card';
import styles from '../component/card.module.css';
import CardContent from '@mui/material/CardContent';

const CardComponent = ({ words, getCharClass }) => {
  return (
    <div className={styles.card}>
    <Card style={{backgroundColor: "#191919"}} sx={{ minWidth: 330 }}>
      <CardContent>
         {
           words.map((word, i) => (
            <>
             <span className={styles.spancontainer} key={i}>
             <span className={styles.spancontainer} >
               {
                 word.split("").map((char, idx) => (
                   <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                 ))
               }
             </span >
             <span> </span>
             </span>
             </>
         ))
       }
      </CardContent>
    </Card>
    </div>
  );
}

export default CardComponent    