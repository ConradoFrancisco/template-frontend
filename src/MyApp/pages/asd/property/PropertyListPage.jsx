import PageHeader from 'MyApp/components/common/PageHeader';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ListOrderComponent from './components/ListOrderComponent';
import ListFilterComponent from './components/ListFilterComponent';
import PropertyListItem from './components/PropertyListItem';
import Pagination from 'react-bootstrap/Pagination';
import MyLoadingComponent from 'MyApp/my-components/MyLoadingComponent';
import { FiPlus } from 'react-icons/fi';

const PropertyListPage = () => {
  const [properties] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [loading] = React.useState(true);
  return (
    <>
      <PageHeader
        title="Mis Publicaciones"
        description="Mantené al día el estado de tus publicaciones, así como sus fotografías y no descuides los mensajes de los interesados."
        className="mb-3"
      >
        <Button variant="primary" size="sm">
          <FiPlus /> Nueva Publicación
        </Button>
      </PageHeader>
      <Row className="g-3">
        <Col xs={12} sm={2}>
          <Card>
            <ListFilterComponent />
          </Card>
        </Col>
        {loading ? (
          <MyLoadingComponent />
        ) : (
          <Col xs={12} sm={10}>
            <ListOrderComponent />
            {properties.map(index => (
              <PropertyListItem key={index} />
            ))}
            <Row className="mt-3">
              <Col>
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </>
  );
};

export default PropertyListPage;
