import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Navigation } from '../components/Navigation';

export default function Home() {
  return (
    <div className='page-container'>
      <Navigation />
      <div className={ styles.content }>
        <h1> Next JS News App </h1>
        <h3> Your one stop destination for latest news </h3>
      </div>
    </div>
  )
}
