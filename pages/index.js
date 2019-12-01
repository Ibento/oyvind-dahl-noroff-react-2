import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Async from 'react-async';
import { BASE_URL } from "../constants/API";
import ElephantList from "../components/elephants/list/ElephantList";



// Request user data from the elephant API
const loadElephants = () =>  
  fetch(BASE_URL, {headers: {"X-Requested-With": "XMLHttpRequest"}})
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())



export default function Index(props) {

  return (
    <div className="container">
      <Async promiseFn={loadElephants}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return (
              <div>
                <ElephantList elephants={data} />
              </div>
            )
        }}
      </Async>
    </div>
  );
}

