import {useEffect,useState} from "react"

export function useToken(){
    const [token,setToken] = useState(()=>localStorage.getItem('token' || ''))
    const fetchToken = async () =>{
        try{
            const data = await fetch('https://cabaprop.ar/api/v1/users/login',{
                headers : {'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : {
                "email": "aspirante@siete.com", // datos dinamicos viniendo de la pagina del login
                "password": "123456" 
            } 
                },
            )
            const jsonData = await data.json(); 
            console.log(jsonData.token)
            setToken(jsonData.token);
            localStorage.setItem('token',jsonData.token)
        }catch(err){
            console.error("hubo un error con la obtencion del token: ", err)
        }
    }

    useEffect(()=>{
        
       
        fetchToken()
    },[])
    return {token,fetchToken,setToken}
}