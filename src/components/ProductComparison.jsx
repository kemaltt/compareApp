import React from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import Search from './Search'

export default function ProductComparison({ data }) {
  const [selectedItems, setSelectedItems] = useState([])
  const [products, setProducts] = useState(data)
  const [message, setMessage] = useState('')
  console.log(message)

  const addToCompare = (product) => {
    setSelectedItems([...selectedItems, product])
  }
  const removeToCompare = (product) => {
    setSelectedItems([...selectedItems.filter((el) => el.id !== product.id)])
  }

  return (
    <div className="main">
      <Search
        products={products}
        setProducts={setProducts}
        setMessage={setMessage}
      />
      <p style={{ color: 'red', textAlign: 'center' }}> {message}</p>
      <h1 style={{ color: 'green', textAlign: 'center' }}>Compare Items</h1>
      {selectedItems.length > 0 ? (
        <div className="compare_container">
          <div style={{ width: '20%', textAlign: 'left' }}>
            <h3>Title </h3>
            <h3>Price </h3>
            <h3>Description </h3>
            <h3>Condition </h3>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '10px',
              textAlign: 'left',
              width: '80%',
            }}
          >
            {selectedItems.map((el, i) => (
              <table key={i}>
                <tr>
                  <th>{el.name}</th>
                </tr>
                <tr>
                  <td>{el.price}</td>
                </tr>
                <tr>
                  <td>{el.description}</td>
                </tr>
                <tr>
                  <td>{el.condition}</td>
                </tr>
              </table>
            ))}
          </div>
        </div>
      ) : null}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'center',
          padding: '2vh 10%',
        }}
        className="products_container"
      >
        {products.map((product, i) => (
          <ProductCard
            product={product}
            id={product.id}
            i={i}
            selected={selectedItems}
            addToCompare={addToCompare}
            removeToCompare={removeToCompare}
          />
        ))}
      </div>
    </div>
  )
}
