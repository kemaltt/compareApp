import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({
  product,
  i,
  id,
  selected,
  addToCompare,
  removeToCompare,
}) {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const productDetail = () => {
    setToggle(!toggle)
  }

  return (
    <div key={i} className="product_card">
      <img
        onClick={productDetail}
        style={{ width: '50%' }}
        src={product.image}
        alt={product.name}
      />
      <div style={{ width: '50%' }} className="product_body">
        <h3>{product.name} </h3>
        <p>{product.price}</p>
        {selected && selected.includes(product) ? (
          <button
            style={{
              backgroundColor: 'red',
              border: 'none',
              padding: '10px 20px',
              color: 'white',
              borderRadius: '25px',
              width: '100px',
              margin: '4px',
            }}
            onClick={() => removeToCompare(product)}
          >
            Remove
          </button>
        ) : (
          <button
            style={{
              backgroundColor: 'yellowGreen',
              border: 'none',
              padding: '10px 20px',
              color: 'white',
              borderRadius: '25px',
              width: '100px',
              margin: '4px',
            }}
            onClick={() => addToCompare(product)}
          >
            Compare
          </button>
        )}
        <button
          onClick={() => navigate(`/productdetail/${id}`)}
          style={{
            backgroundColor: 'orange',
            border: 'none',
            padding: '10px 20px',
            color: 'white',
            borderRadius: '25px',
            marginTop: '4px',
            width: '100px',
            margin: '4px',
          }}
        >
          Detail
        </button>
      </div>
      {toggle ? (
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '33%',
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '20px',
            width: '30%',
            borderRadius: '25px',
            textAlign: 'center',
          }}
        >
          <img
            style={{ width: '50%' }}
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name} </h3>
          <p>{product.price}</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
            className="star"
          >
            {[...Array(5)].map((star, i) => (
              <i
                style={{
                  fontSize: '1.5rem',
                  color: product.rating >= i + 1 ? 'orange' : 'grey',
                }}
                class="las la-star"
              ></i>
            ))}
          </div>

          <button
            style={{
              background: 'red',
              border: 'none',
              padding: '5px 15px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            onClick={productDetail}
          >
            x
          </button>
        </div>
      ) : null}
    </div>
  )
}
