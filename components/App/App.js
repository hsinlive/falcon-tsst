import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './styles/App.module.css'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import NewsContent from './NewsContent'
import Footer from './Footer'

export default function App() {
  const { query } = useRouter()

  const [source, setSource] = useState()

  useEffect(() => {
    const selected =
      query?.source || localStorage.getItem('selected') || '熱門報導'

    setSource(selected)
    localStorage.setItem('selected', selected)
  }, [query])

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.main}>
        <div className={styles.nav}>
          <NavigationBar source={source}></NavigationBar>
        </div>
        <div className={styles.content}>
          <NewsContent source={source} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
