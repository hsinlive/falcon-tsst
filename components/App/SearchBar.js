import styles from './styles/SearchBar.module.css'

import { blue } from '@mui/material/colors'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <img className={styles.SearchLogo} src="/microsoft_bing_logo.png" />
      <input type="text" value="" />
      <SearchIcon sx={{ color: blue[500] }} className={styles.SearchIcon} />
    </div>
  )
}

export default SearchBar
