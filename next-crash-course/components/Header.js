import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Blockchain</span> News
        </h1>
        <p className={headerStyles.description}>
            Get the latest blockchain and crypto news here!
        </p>

    </div>
  )
}

export default Header