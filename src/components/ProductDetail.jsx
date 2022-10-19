import React from 'react'
import { useParams } from 'react-router-dom'
// import css from '../css/ProductDetail.css'

export default function ProductDetail({ data }) {
  const { id } = useParams()
  console.log(id)
  const filteredProduct = data.filter((el) => el.product_id == id)
  console.log(filteredProduct[0])
  const product = filteredProduct[0]

  return (
    <div className="product_detail">
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>{product.category} </p>
      <p>${product.price} </p>
      <p>{product.description} </p>
      {/* <p>
        colors :
        {product.rating.map((el, i) => (
          <span style={{ margin: '3px' }} key={i}>
            {el}
          </span>
        ))}
      </p> */}
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
              color: product.rating.rate >= i + 1 ? 'orange' : 'grey',
            }}
            class="las la-star"
          ></i>
        ))}
      </div>
    </div>
  )
}
