import React from 'react'
import axios from 'axios'

export const News = async () => {
    try {
      const { data } = await axios.get(
        "https://atendi-backend.onrender.com/api/posts", {headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzVkMjBhYjM1NWVkNDZmM2EzYmMxMyIsImlhdCI6MTcwNzQ4NzMyOSwiZXhwIjoxNzEwMDc5MzI5fQ.-ShcSR_ZEj1GAlJn5yIv-oWELTS5-qg8DvrEZ1grCbg` }
    });
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };


  export const newsDetails = async (id) => {
    console.log(id)
    try {
      const { data } = await axios.get(
        `https://atendi-backend.onrender.com/api/posts/${id}`, {headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzVkMjBhYjM1NWVkNDZmM2EzYmMxMyIsImlhdCI6MTcwNzQ4NzMyOSwiZXhwIjoxNzEwMDc5MzI5fQ.-ShcSR_ZEj1GAlJn5yIv-oWELTS5-qg8DvrEZ1grCbg` }
    });
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };