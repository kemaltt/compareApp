import React from 'react'
import Table from 'react-bootstrap/Table'
import { RiDeleteBin6Fill } from 'react-icons/ri'

export default function Contact({ selectedProducts, setSelectedProducts }) {
  // const [quantity, setQuantity] = useState(1)
  // console.log(selectedProducts)
  let total = 0

  const totalAmount = selectedProducts.map((product) => {
    return product.price * product.count
  })
  totalAmount.map((el) => (total += el))
  const decreaseQuantity = () => {}
  const increaseQuantity = () => {}

  const removeToProduct = (product) => {
    setSelectedProducts([
      ...selectedProducts.filter((el) => el.product_id !== product.product_id),
    ])
    console.log('delte')
  }

  return (
    <div className="cart">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product title</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={product.image}
                  style={{ width: '25px' }}
                  alt={product.name}
                />
              </td>
              <td>{product.title}</td>
              <td className="quantity_btn">
                <button
                  onClick={decreaseQuantity}
                  style={{ background: 'red' }}
                >
                  -
                </button>
                <span> {product.count} </span>
                <button
                  onClick={increaseQuantity}
                  style={{ background: 'yellowgreen' }}
                >
                  +
                </button>
              </td>
              <td>${product.price * product.count} </td>
              <td style={{ textAlign: 'center' }}>
                <RiDeleteBin6Fill
                  onClick={() => removeToProduct(product)}
                  style={{ color: 'red' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th></th>
            <th>Total amount</th>
            <th>${total.toFixed(2)} </th>
            <th></th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}
