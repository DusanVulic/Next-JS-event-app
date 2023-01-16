import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {

    const{items}=props
  return <ul>
       {props.map((event)=>{
        const{id}=event;
return <EventItem key={id} {...event}/>
       })}
  </ul>;
};

export default EventList;
