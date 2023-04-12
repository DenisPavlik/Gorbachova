import React from "react";
import customers from "../../../store/store";
import Customer from "./Customer";

const CustomerContainer = (props) => {
  return (
    <div>
      {customers.filter(u => {
        if (props.query === '') {
          return u
        } else if (u.name.includes(props.query)) {
          return u
        }  else if (u.company.includes(props.query.charAt(0).toUpperCase() + props.query.slice(1))) {
          return u
        } else if (u.phone.includes(props.query)) {
          return u
        } else if (u.email.includes(props.query)) {
          return u
        } else if (u.country.includes(props.query.charAt(0).toUpperCase() + props.query.slice(1))) {
          return u
        } else if (u.status.includes(props.query.charAt(0).toUpperCase() + props.query.slice(1))) {
          return u
        } else {
          return ""
        }
      }).map((u) => {
        return <Customer key={u.id} name={u.name} company={u.company} phone={u.phone} email={u.email} country={u.country} status={u.status} />
      })}
    </div>
  )
  
};

export default CustomerContainer;

