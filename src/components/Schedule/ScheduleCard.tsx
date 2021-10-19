import { Button, Grid } from "@mui/material";
import React from "react";
import '../../scss/schedule.scss'

interface Props {
  title: string;
  name: string;
  time: string;
  href: string;
  src: string;
}

const ScheduleCard: React.FC<Props> = ({ 
    title,
    name,
    time,
    href,
    src
  }) => (
    <Grid container item xs={12} sm={6} md={4}className="spacing" >
        <Grid container  className="scheduleBox" >
            <Grid item xs={8} sm={8} md={8} >
                <h4>{title}</h4>
                <p className="subTitle">{name}</p>
                <p className="subTime">{time}</p>
                <Grid container >
                    <Button href={href}  className="button" > Watch Now </Button>
                </Grid>
            </Grid>
            <Grid container item xs={4} sm={4} md={4} justifyContent="right" >
                <img src={src} alt={title} className="scheduleImg" />
            </Grid>
        </Grid>
    </Grid>
)

export default ScheduleCard;