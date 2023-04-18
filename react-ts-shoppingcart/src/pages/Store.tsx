import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';
import { Col, Row } from 'react-bootstrap';

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} xl={4} className='g-3'>
        {storeItems.map(item => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
