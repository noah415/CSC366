import axios from "axios";


export function selectCall(table_name, where_clause){
    axios({
      method: "GET",
      url: "/select?tablename=" + table_name,
      data: {
        json: where_clause
      }
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

export function selectAllCall(table_name){
    axios({
        method: "GET",
        url: "/selectall?tablename=" + table_name,
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