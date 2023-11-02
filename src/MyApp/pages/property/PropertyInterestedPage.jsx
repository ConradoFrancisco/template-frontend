import {React,useEffect,useState} from 'react';
import { Card, Row, Col , Button} from 'react-bootstrap';
import PageHeader from 'MyApp/components/common/PageHeader';
import ListOrderComponent from './components/ListOrderComponent';
import ListFilterComponent from './components/ListFilterComponent';
import PropertyListItem from './components/PropertyListItem';
import MyLoadingComponent from 'MyApp/my-components/MyLoadingComponent';
import AdvanceTablePagination from 'MyApp/components/common/advance-table/AdvanceTablePagination';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { TokenComponent } from './components/TokenComponent' componente encargado de traer el token 

const PropertyInterestedPage = () => {
  const TOKEN_URL = 'https://cabaprop.ar/api/v1/users/login';
  const [token, setToken] = useState('');
  const [propertys,setPropertys] = useState([]);

  const [offset,setoffset] = useState (0);
  const [limit,setLimit] = useState(50);
  
  //const {token} = TokenComponent(); componente encargado de traer el token 


  const fetchToken = () =>{
    fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        email: 'aspirante@siete.com',
        password: '123456'
      })
  })
    .then(response => response.json())
    .then(data => {
      setToken(data.token)
      console.log(data)
      /* localStorage.setItem('token',data.token) */
    })
    .catch(error => {
      console.error('Error:', error);
    })
}

const fetchPropertys = (offset,limit) =>{
fetch (`https://cabaprop.ar/api/v1/properties/shared?offset=${offset}&limit=${limit}`,{
    method:'POST',
    headers:{
        Authorization: 'Bearer ' + token,
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify ({
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
    })
})
.then(res => res.json())
.then(res => {
    setPropertys(res.result)
    console.log(res.result) 
})
.catch(error =>
        console.error(error)
    )
}

     
  useEffect(()=>{
    if(!token){
        fetchToken();
        fetchPropertys(offset,limit);
    }else{
        fetchPropertys(offset,limit);
    }
    
},[token,offset])
  



  return (
    <>
      <PageHeader
        title="Publicaciones compartidas"
        description="Recordá siempre poner mas organización a las publicaciones que fueron compartidas en tu perfil"
        className="mb-3"
      />
      <Row className="" /* style={{justifyContent: 'space-around'}} */>
          <div className='row'>
            {/* {propertys.map((property,index)=>{
              return(
                <Card className="col-md-4 mt-3" key={index} >
                  <Card.Header>
                    <Card.Img  src={property.images[0].url} className="img-fluid" alt="Imagen de la carta" style={{maxHeight:'210px'}}/>
                  </Card.Header>
                  <Card.Title className="mt-2">
                    {property.title}
                  </Card.Title>
                  <Card.Text>
                    {property.location.street} al {property.location.number},
                    <strong>{property.location.locality}</strong>
                  </Card.Text>
                  <Card.Body>
                    <FontAwesomeIcon icon="fa-thin fa-door-closed"/>
                    
                  </Card.Body>
                  <Card.Footer>
                 {property.price.currency === 1 ? <span>ARS</span> : <span>USD</span>} {property.price.total}
                  </Card.Footer>
                </Card>  
           )
            })} */}
          </div>
            <Row >
              <Col className='mt-1'>
              <Button onClick={() => setoffset(offset - 6)}>anterior</Button>
              </Col>
              <Col className='offset-8 mt-1'>
              <Button onClick={() => setoffset(offset + 6)}>siguiente</Button>
              </Col>
            </Row>
          </Row>
        
      
    </>
  );
};


export default PropertyInterestedPage;
