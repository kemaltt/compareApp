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
        setMessage('No matching information')
      } else {
        setProducts(search)
        setMessage(`There are ${search.length} matches `)
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
