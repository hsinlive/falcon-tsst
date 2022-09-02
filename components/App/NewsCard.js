import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import moment from 'moment'

import styles from './styles/NewsCard.module.css'

const NewsCard = ({ news }) => {
  const { title, description, author, publishedAt, urlToImage, url } = news
  var m = moment(publishedAt)
  moment.locale('zh-tw', {
    relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '幾秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年',
    },
  })

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Card sx={{ margin: '10px', width: '400px' }}>
        <CardMedia component="img" height="140" image={urlToImage} />
        <CardContent>
          <Typography
            className={styles.Title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className={styles.Description}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Divider style={{ margin: '5px 0' }} />
          <Typography
            className={styles.Footer}
            variant="body2"
            color="text.secondary"
          >
            <span>{author}</span>
            <span className={styles.PublishedAt}>{m.fromNow()}</span>
          </Typography>
        </CardContent>
      </Card>
    </a>
  )
}

export default NewsCard
