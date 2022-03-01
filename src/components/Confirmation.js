import React from 'react'
import { Container, Typography, Paper, Button } from '@mui/material'
import './Confirmation.css'


const Confirmation = () => {
  return (
    <>
        <Container className="container">
            <Paper elevation={4} className="paper">
                <Typography variant="h3" align="center" gutterBottom>Confirm Details</Typography>

                <div>
                    <Typography variant="h5"  gutterBottom>Personal Details</Typography>
                    <Typography variant="body1">First Name: </Typography>
                    <Typography variant="body1">Last Name</Typography>
                </div>
                <div>
                    <Typography variant="h5" gutterBottom>Physical Address</Typography>
                </div>
                <div>
                    <Typography variant="h5" gutterBottom>Baptism</Typography>
                </div>
                <div>
                    <Typography variant="h5" gutterBottom>Church Involvement</Typography>
                </div>

                <Button variant="contained" color="primary" className="save-button">CONFIRM</Button>

            </Paper>
        </Container>
    </>
  )
}

export default Confirmation