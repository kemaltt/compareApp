import React from 'react'
import { useState } from 'react'
import Loading from './Loading'
import ProductCard from './ProductCard'
import Search from './Search'

export default function ProductComparison({
  data,
  isAuthenticated,
  isLoading,
}) {
  const [selectedItems, setSelectedItems] = useState([])
  const [products, setProducts] = useState(data)
  const [message, setMessage] = useState('')
  console.log(message)

  const addToCompare = (product) => {
    setSelectedItems([...selectedItems, product])
  }
  const removeToCompare = (product) => {
    setSelectedItems([
      ...selectedItems.filter((el) => el.product_id !== product.product_id),
    ])
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="main">
      <Search
        products={products}
        setProducts={setProducts}
        setMessage={setMessage}
        isAuthenticated={isAuthenticated}
      />
      <p style={{ textAlign: 'center' }}> {message}</p>
      <h1 style={{ color: 'green', textAlign: 'center' }}>Compare List</h1>
      {selectedItems.length > 0 ? (
        <div className="compare_container">
          <div style={{ width: '20%', textAlign: 'left' }}>
            <h3>Title </h3>
            <h3>Price </h3>
            <h3>Category </h3>
            <h3>Rating </h3>
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
                  <th>{el.title}</th>
                </tr>
                <tr>
                  <td>{el.price}</td>
                </tr>
                <tr>
                  <td>{el.category}</td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    {[...Array(5)].map((star, i) => (
                      <i
                        style={{
                          fontSize: '1.5rem',
                          color: el.rating.rate >= i + 1 ? 'orange' : 'grey',
                        }}
                        class="las la-star"
                      ></i>
                    ))}
                  </td>
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
            id={product.product_id}
            i={i}
            selected={selectedItems}
            addToCompare={addToCompare}
            removeToCompare={removeToCompare}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </div>
  )
}
