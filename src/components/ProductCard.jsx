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
  isAuthenticated,
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
            onClick={() =>
              !isAuthenticated
                ? alert('please log in before continuing')
                : removeToCompare(product)
            }
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
            onClick={() =>
              !isAuthenticated
                ? alert('please log in before continuing')
                : addToCompare(product)
            }
          >
            Compare
          </button>
        )}
        <button
          onClick={() =>
            navigate(
              isAuthenticated
                ? `/productdetail/${id}`
                : alert('please log in before continuing'),
            )
          }
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
        <div className="popup_container">
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
