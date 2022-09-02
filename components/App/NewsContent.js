import useSWR from 'swr'
import axios from 'axios'

import styles from './styles/NewsContent.module.css'
import NewsCard from './NewsCard'

const useNews = (params) => {
  const URL = 'https://newsapi.org/v2/top-headlines'
  const apiKey = '5d293fca5ec34b5db8ea6bfdf2a6eb1f'

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

  return (
    <>
      <h1 className={styles.Title}>{source}</h1>
      <div className={styles.Content}>
        {articles.map((article) => (
          <NewsCard news={article} />
        ))}
      </div>
    </>
  )
}

export default NewsContent
