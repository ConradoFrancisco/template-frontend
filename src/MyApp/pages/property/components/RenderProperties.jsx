import MyLoadingComponent from "MyApp/my-components/MyLoadingComponent"
import '../sharedproperty.css'
import {BsDoorClosed,BsHeart,BsWhatsapp} from 'react-icons/bs'
import {FaBath,FaRulerCombined} from 'react-icons/fa'

import {BiBed,BiCommentDetail} from 'react-icons/bi'
import MyPagination from "./MyPagination"


export default function RenderProperties({propertys,loading,cantPages,setoffset,offset}){

    return(<>
        <div className='cardCont'>
          
          { loading ? 
                <MyLoadingComponent/> 
                    :
                propertys.length > 0 ?
                propertys.map((property,key)=>{
                return(
                    <article className='contenedorCarta p-2' key={key}>
                        <img src={property.images.length === 0 || property.images[0].url === '' ?  "https://cabaprop.com.ar/uploads/properties/653d13cb23e67937eafcff1d/42a28c93-afd3-4d2f-931f-8e430f776683_2023-10-28_11-16-35.jpg" : property.images[0].url} />
                        <h5>{property.title}</h5>
                        <span>{property.location.street} al {property.location.letter},<strong>{property.location.area_level_1}</strong></span>
                        <div className="row mt-4" style={{justifyContent:'space-between'}}>
                        <div className='col-md-4 iconos'>
                            <BsDoorClosed size={20}/>
                            <span>{property.characteristics && property.characteristics.bathrooms === undefined ?   property.characteristics.bathrooms : "?"}Ambientes</span>
                        </div>
                        <div className='col-md-4 iconos'>
                            <FaBath size={20}/>
                            <span>{property.characteristics && property.characteristics.bathrooms === undefined ?   property.characteristics.bathrooms : "?"}Baños </span>

                        </div>
                        <div className='col-md-4 iconos p-0'>
                            <BiBed size={20}/>
                            <span>{property.characteristics && property.characteristics.bedrooms === undefined ?   property.characteristics.bedrooms  : "?"}Habitaciones </span>
                            
                        </div>
                        <div className="row mt-2 mb-4">
                            <div className='col-md-4 iconos'>
                                <FaRulerCombined size={20}/>
                                <span>{property.surface.totalSurface} m² Total</span>
                            </div>
                            <div className='col-md-4 iconos ms-2'>
                            <FaRulerCombined size={20} />
                            <span>{property.surface.coveredSurface} m² Cubierto</span>
                            </div>
                        </div>
                        </div>
                    
                        <div className='price'>
                        {property.price.currency === 1 ? <h4 className='pt-3'>USD {property.price.total}</h4> : <h4 className='pt-3'>$ {property.price.total}</h4>}
                        <div className="iconoscart pt-1">
                            <BsHeart size={35}  className='like-icons p-2'/> <BsWhatsapp size={35} className='like-icons p-2'/> <BiCommentDetail size={35} className='like-icons p-2'/>
                        </div>
                        </div>
                    </article>
                )
                })
                    : 
                <h3>No hay Publicaciones disponibles para esta busqueda</h3>
          }
           
        </div>
        <MyPagination offset={offset} setoffset={setoffset} cantPages={cantPages}/>
       
      </>
    )
}