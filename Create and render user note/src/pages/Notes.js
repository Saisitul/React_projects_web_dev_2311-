import React, { useEffect, useState } from 'react'
import  { Container, Grid, Paper} from '@material-ui/core'
import NoteCard from '../Component/NoteCard'

// ************************************************************************
//  This file takes data to json
export default function Notes() {
  const[notes,setnotes] = useState([])
  useEffect(()=>{
       fetch('http://localhost:8000/notes')
       .then(res=> res.json())
       .then(data=> setnotes(data))
  }, [])

  const handleDelete= async (id) => {
    await fetch('http://localhost:8000/notes/' + id,{
      method: 'DELETE'
    })

    const newNotes = notes.filter(note=> note.id != id)
    setnotes(newNotes)
  }
  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
      {notes.map(note=>(
        <Grid key={note.id} xs={12} sm={6} md={3}>
          <NoteCard note={note} handleDelete={handleDelete}/>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}
