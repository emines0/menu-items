import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
/*
 * Get unique value of categories from data.js
 * First item will be all
 */

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
      /*
       * If category is all set menu items to items and display all items from data.js
       */
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  )
}

export default App
