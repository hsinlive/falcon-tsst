import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/App.module.css'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import NewsContent from './NewsContent'

export default function App() {
  const { query } = useRouter()

  const [source, setSource] = useState()

  useEffect(() => {
    const selected =
      query?.source || sessionStorage?.getItem('selected') || 'hot'

    setSource(selected)
    sessionStorage.setItem('selected', selected)
  }, [query])

  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <div className={styles.main}>
        <div className={styles.nav}>
          <NavigationBar className={styles.nav} source={source}></NavigationBar>
        </div>
        <div className={styles.content}>
          <NewsContent source={source} />
        </div>
      </div>
    </div>
  )
}
