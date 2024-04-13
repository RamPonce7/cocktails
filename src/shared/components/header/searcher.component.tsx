import { Search } from "@mui/icons-material"
import { Input, Stack } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react"


export const SearcherComponent = () => {
  const { pattern } = useParams();
  const [search, setSearch] = useState(pattern || '');
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate(`${import.meta.env.VITE_BASE}/search/${search}`)
  }
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search === '') {
      return;
    }
    if (e.key === 'Enter') {
      handleSearch();
    }
  }


  return (

    <Stack direction="row" sx={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f555',
      borderRadius: '8px',
    }}>

      <Input type="text"
        placeholder="Search..."
        value={search}
        onKeyPress={handleEnterKey}
        sx={{
          border: 'none',

          backgroundColor: 'transparent',
          height: '40px',
          width: { xs: '100%', sm: '350px' },
          color: 'white',
          padding: '0 10px',
          ':focus': {
            backgroundColor: '#f5f5f5'
          },
          '::before': {
            borderBottom: 'none !important'
          },
          '::after': {
            borderBottom: 'none'
          },

        }}

        onChange={handleOnchange}
      />


      <Search sx={{
        pr: 1,
        color: 'white',
        cursor: 'pointer'
      }} />

    </Stack>

  )
}
