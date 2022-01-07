import { Container } from '@mui/material';
import React from 'react';
import '../../scss/faq.scss';
import faqData from '../../data/faqs.json';

export default function FAQ () {
  return (
      <section id='FAQ'>
         <Container>
            <div className='wrapper'>
               <div className='title'>FAQ</div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <div className='cardWrapper'>
                  {faqData.map((item) => (
                     <div className='card' key={item.id}>
                        <div className='question'>{item.question}</div>
                        <p className='answer'>{item.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
  );
}
