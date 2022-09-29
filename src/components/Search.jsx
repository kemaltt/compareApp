import React from 'react'
import { useState } from 'react'

export default function Search({ products, setProducts, setMessage }) {
  const [input, setInput] = useState('')
  const getProduct = (e) => {
    e.preventDefault()
    if (!input) {
      alert('enter a product')
    } else {
      const search = products.filter(
        (el) => el.name.toLowerCase().indexOf(input.toLowerCase()) !== -1,
      )

      if (search.length === 0) {
        setMessage(
          <span style={{ color: 'red' }}>No matching information</span>,
        )
      } else {
        setProducts(search)
        setMessage(
          <span style={{ color: 'yellowgreen' }}>
            There are {search.length} matches
          </span>,
        )
      }
    }
    setInput('')
  }
  return (
    <div className="search_container">
      <form onSubmit={getProduct} action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a product..."
          type="text"
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
