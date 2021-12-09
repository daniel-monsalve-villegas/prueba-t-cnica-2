import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';

const App = () => {
  const [product, setProduct] = useState([]);
  const productCollectionRef = collection(db, 'productos');
  const [list, setList] = useState('')

  useEffect(() => {
    const getData = async () => {
      const datos = await getDocs(productCollectionRef);
      setProduct(datos.docs.map((doc) => (doc.data())))
    }

    getData();
  }, []);

  return (
    <div>
      {product.map((product) => {
          <div key={product.id}>
            <img src={product.imgUrl} />
            <h3>{product.nombre}</h3>
            <h5>${product.precio}</h5>
            <p>{product.cosa}</p>
          </div>
      })}
    </div>
  )
}

export default App
