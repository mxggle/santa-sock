import React from 'react';
import './snow.scss';

const Snow: React.FC<{ count: number }> = ({ count }) => {
   return <>
     {
           new Array(count).fill('').map((_, i) => (
             <div key={i} className="snow" />
           ))
       }
   </>;
};


export default Snow;
