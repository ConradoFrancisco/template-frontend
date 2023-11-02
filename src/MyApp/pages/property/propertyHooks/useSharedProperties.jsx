import { useState,useEffect } from "react";
import { useToken } from "../components/useToken";
import PropertiesService from '../../../data/PropertiesService'
export const useSharedProperties = () =>{



    const [propertys,setPropertys] = useState([]);
    const [offset,setoffset] = useState (0);
    const [limit,setLimit] = useState(8);
    const {fetchToken,setToken,token} = useToken()
    const [loading,setLoading] = useState(false);
    const [cantPages,setCantPages] = useState()
    
    const propertiesService = new PropertiesService()
  
    const filtros = {
      "propertyTypes": [],
      "operation": 2,
      "status":0 ,
      "sortBy": {},
      "excludedRealEstateId": 0,
      "price": {},
      "surface": {},
      "ambiences": [],
      "bedrooms": [],
      "bathrooms": [],
      "garages": [],
      "neighborhoods": [],
      "realEstates": []
    }

    const fetchProperties = () =>{
        setLoading(true)
        propertiesService.getProperties(limit,offset,filtros,token)
        .then(data => {
          setCantPages(Math.ceil(data.allPropertiesLength/limit)- 1)
          setPropertys(data.result)
          setLoading(false)
          
        })
    }
  
    useEffect(()=>{
      if(!token){
          fetchToken()
          fetchProperties()
      }else{
          fetchProperties()
        }
      },[token,offset])
    
    return {propertys,setoffset,setLimit,offset,loading,setPropertys,cantPages}
  }