import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <button> <Link href="/ports">PORTS</Link></button>
      <button> <Link href="/hs-codes">HS codes</Link></button>

      </div>
  )
}

 