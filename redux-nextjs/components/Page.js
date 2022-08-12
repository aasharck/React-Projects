import React from 'react'
import Counter from './Counter'
import Link from 'next/link'
import Users from './Users'

const Page = (props) => {
  return (
    
    <div>
        <h1>{props.title}</h1>
    <Users />
    <Counter />
      <br/>
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  )
}

export default Page