import Link from 'next/link'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'

const NavigationBar = ({ source }) => {
  const sources = [
    {
      key: 'hot',
      name: '熱門報導',
    },
    {
      key: 'tw',
      name: '台灣',
    },
    {
      key: 'zh',
      name: '中國',
    },
    {
      key: 'global',
      name: '全球',
    },
    {
      key: 'entertainment',
      name: '娛樂',
    },
    {
      key: 'business',
      name: '商業',
    },
    {
      key: 'sports',
      name: '運動',
    },
    {
      key: 'technology',
      name: '科技',
    },
  ]

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav>
        <List>
          {sources.map((val) => {
            return (
              <ListItem disablePadding>
                <Link href={`/${val.name}`}>
                  <ListItemButton
                    {...(source === val.name ? { selected: true } : {})}
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={val.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </nav>
    </Box>
  )
}

export default NavigationBar
