import React from "react";

//import component
import EventItem from "./EventItem";

///import css styles

import styles from './EventList.module.css'


const EventList = (props) => {

    const{items}=props
  return <ul className={styles.list}>
       {items.map((event)=>{
        const{id}=event;
return <EventItem key={id} {...event}/>
       })}
  </ul>;
};

export default EventList;
