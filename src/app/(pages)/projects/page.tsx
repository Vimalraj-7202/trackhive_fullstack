import { Box} from '@mui/material'
import React from 'react';
import Projects from '@/app/components/projects/index'

const page = () => {
  return (
    <Box sx={{p:1.2,overflowY:'auto'}}>
      <Projects/>
    </Box>
  )
}

export default page