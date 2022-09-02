import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function MediaCard({ news }) {
  const { title, description, author, urlToImage, url } = news
  return (
    <div style={{ margin: '10px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={urlToImage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Divider style={{ margin: '5px 0' }} />
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
