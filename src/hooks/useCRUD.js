import axios from 'axios'
import  { useState } from 'react'

const useCRUD = (urlBase) => {
  const [apiData, setApiData
  ] = useState()

  const getApi=(path)=>{
    axios.get(`${urlBase}${path}/`)
    .then(res => setApiData(res.data))
    .catch(error=> console.log(error))
  }

  const postApi=(path,data)=>{
    axios.post(`${urlBase}${path}/`,data)
    .then(res => setApiData([...apiData,res.data]))
    .catch(error=> console.log(error))
  }

  const deleteApi=(path,id)=>{
    axios.delete(`${urlBase}${path}/${id}/`)
    .then(() => setApiData(apiData.filter(element=> element.id!=id)))
    .catch(error=> console.log(error))
  }

  const updateApi=(path,id,data)=>{
    axios.patch(`${urlBase}${path}/${id}/`,data)
    .then(res => {
      setApiData(apiData.map(element => element.id==id? res.data : element))
    })
    .catch()
  }

  return [apiData,getApi,postApi,deleteApi,updateApi];
}

export default useCRUD
