import {React} from 'react'
import PageHeader from 'MyApp/components/common/PageHeader';
import ListOrderComponent from './components/ListOrderComponent';
import ListFilterComponent from './components/ListFilterComponent';
import PropertyListItem from './components/PropertyListItem';
import MyLoadingComponent from 'MyApp/my-components/MyLoadingComponent';
import AdvanceTablePagination from 'MyApp/components/common/advance-table/AdvanceTablePagination';
import { useSharedProperties } from './propertyHooks/useSharedProperties';
import RenderProperties from './components/RenderProperties';




const PropertySharedPage = () => {
  
  const {propertys,setoffset,offset,loading,cantPages} = useSharedProperties();


  return (
    <>
      <PageHeader
        title="Publicaciones compartidas"
        description="Recordá siempre poner mas organización a las publicaciones que fueron compartidas en tu perfil"
        className="mb-3"
      />
      <RenderProperties 
        propertys={propertys} 
        loading={loading}
        cantPages={cantPages}
        setoffset={setoffset}
        offset={offset}
      />
        
      
    </>
  );
  
};
export default PropertySharedPage;
