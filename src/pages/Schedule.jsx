import React from 'react'
import Box from '@mui/material/Box';
import Camera from "../assets/camera.png"

const Schedule = () => {
  return (
    <div>
      <Box component="div" sx={{ p: 10, border: "2px dashed grey", margin: 5, borderRadius: 3 }}>
        <img src={Camera} alt="camera" width={60} height={60} />
      </Box>
    </div>
  )
}

export default Schedule
