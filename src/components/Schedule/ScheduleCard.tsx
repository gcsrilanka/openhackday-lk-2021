import { Button } from '@mui/material';
import React from 'react';
import '../../scss/schedule.scss';

interface Props {
   title: string;
   name: string;
   time: string;
   href: string;
   src: string;
}

const ScheduleCard: React.FC<Props> = ({ title, name, time, href, src }) => (
   <div className='scheduleCard'>
      <div className='scheduleCardContent'>
         <div>
            <div className='scheduleTopic'>{title}</div>
            <div className='scheduleAuthor'>{name}</div>
            <div className='scheduleTime'>{time}</div>
            <Button href={href} className='button'>
               Watch Now
            </Button>
         </div>
         <div>
            <img src={src} alt={title} />
         </div>
      </div>
   </div>
);

export default ScheduleCard;
