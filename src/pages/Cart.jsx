import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Contact({ selectedProducts }) {
  // const [quantity, setQuantity] = useState(1)
  // console.log(selectedProducts)
  let total = 0

  const totalAmount = selectedProducts.map((product) => {
    return product.price
  })
  totalAmount.map((el) => (total += el))
  const decreaseQuantity = () => {}

  const increaseQuantity = () => {}

  return (
    <div className="cart" style={{ height: '76vh' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product title</th>
            <th>Quantity</th>
            <th>Amount</th>
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
              <td style={{ textAlign: 'center' }}>
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
              <td>${product.price} </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th></th>
            <th>Total amount</th>
            <th>${total} </th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}
