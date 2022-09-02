import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/App.module.css'
import NavigationBar from './NavigationBar'
import NewsCard from './NewsCard'

import SearchIcon from '@mui/icons-material/Search'

import useSWR from 'swr'
import axios from 'axios'

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <input type="text" value="" />{' '}
      <SearchIcon className={styles.SearchIcon} />
    </div>
  )
}

const useNews = (params) => {
  const URL = 'https://newsapi.org/v2/top-headlines'
  const apiKey = 'c14ac1132c5b4fabac7ee0bb1818ea79'

  return useSWR([`${URL}?apiKey=${apiKey}`, params], (url) =>
    axios.get(url, { params })
  )
}

const NewsContent = ({ source }) => {
  const params = {
    熱門報導: {
      country: 'tw',
      category: 'general',
    },
    台灣: {
      country: 'tw',
    },
    中國: {
      country: 'cn',
    },
    全球: { category: 'general' },
    娛樂: { country: 'tw', category: 'entertainment' },
    商業: { country: 'tw', category: 'business' },
    運動: { country: 'tw', category: 'sports' },
    科技: { country: 'tw', category: 'technology' },
  }
  const { data, error } = useNews(params[source])

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const { articles } = data.data

  return articles.map((article, key) => <NewsCard news={article} />)
}

export default function App() {
  const { query } = useRouter()

  const [source, setSource] = useState()

  useEffect(() => {
    const selected =
      query?.source || sessionStorage?.getItem('selected') || 'hot'

    setSource(selected)
    sessionStorage.setItem('selected', selected)
  }, [source])

  return (
    <div className={styles.container}>
      <SearchBar onSearch={() => {}}></SearchBar>
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
