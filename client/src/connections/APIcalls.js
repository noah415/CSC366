import axios from "axios";


export function selectCall(table_name, where_clause){
    axios({
      method: "POST",
      url: "/select?tablename=" + table_name,
      data: where_clause
    })
    .then((response) => {
      return response.data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

export function selectAllCall(table_name){
    axios({
        method: "GET",
        url: "/selectall?tablename=" + table_name,
    })
    .then((response) => {
        return response.data
    }).catch((error) => {
        if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

export function insertCall(table_name, values_to_insert){
  axios({
    method: "POST",
    url: "/insert?tablename=" + table_name,
    data: values_to_insert,
  })
  .then((response) => {
    return response
  }).catch((error) => {
    if (error.response) {
    console.log(error.response)
    console.log(error.response.status)
    console.log(error.response.headers)
    }
  })}

export function insertCall(table_name, delete_clause){
  axios({
    method: "DELETE",
    url: "/delete?tablename=" + table_name,
    data: delete_clause,
  })
  .then((response) => {
    return response
  }).catch((error) => {
    if (error.response) {
    console.log(error.response)
    console.log(error.response.status)
    console.log(error.response.headers)
    }
  })}