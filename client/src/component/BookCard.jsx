import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/material';

const BookCard = ({book}) => {
  
  return (
    <div>
        <Card sx={{width:"350px",height:"350px",border:"1px solid black"}}>
              <Stack justifyContent={"center"} alignItems={"center"}>
            <CardContent>

            <CardMedia
            component="img"
            sx={{width:"250px",height:"200px"}}
            image={`http://localhost:8000/${book.coverimage}`}
          />
              <Typography>{book.title}</Typography>
              <Typography>{book.author}</Typography>
              <Typography>{book.category}</Typography>
              <Typography>{book.description}</Typography>

            </CardContent>
              </Stack>

              
        </Card>
    </div>
  )
}

export default BookCard;