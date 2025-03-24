import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthData } from '../AuthContext';

const useAxiosApi = () => {

  const {token} = useContext(AuthData);

  const fetchData = async (url, requestType = null, formData = null, auth = false) => {
    try {

      const response = requestType == 'post' ?
        await axios.post("http://127.0.0.1:8000/api/" + url, formData, {
          headers: {
            "Accept": "application/json",
            ...(auth && { "Authorization": `Bearer ${token}` })
          }
        }) :
        await axios.get("http://127.0.0.1:8000/api/" + url, formData, {
          headers: {
            "Accept": "application/json",
            ...(auth && { "Authorization": `Bearer ${token}` })
          }
        });

      if (response.status === 200) {
        return { success: true, response: response.data }
      } else {
        return { success: false, response: response?.data?.message }
      }
    } catch (error) {

      return { success: false, response: error.response?.data?.message ? error.response?.data?.message : "API Failed" }
    }
  };

  return fetchData
}

export default useAxiosApi
