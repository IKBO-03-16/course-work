import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <>
      <section>
        <nav>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Link to="/slinkin">
            <Button variant="primary" size="lg">Слинкин</Button>
          </Link>   
          <Link to="/istratov">
            <Button variant="primary" size="lg">Истратов</Button>
          </Link> 
          <Link to="/kazhentsev">
            <Button variant="primary" size="lg">Каженцев</Button>
          </Link>  
          </div>
        </nav>
      </section>
    </>
  );
}

export default Main;
