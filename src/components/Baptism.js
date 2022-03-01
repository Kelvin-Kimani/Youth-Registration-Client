import React from 'react'
import { Button, Typography, Grid } from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import FormInput from "./CustomTextField";


const Baptism = ({ back, next }) => {

  const methods = useForm();

  return (
    <>  
      <Typography variant="h4" gutterBottom>Baptism</Typography>
      <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) =>next({...data}))}>
            <Grid container spacing={3}>
              <FormInput label="Membership Number" name="membershipNo"/>
            </Grid>

            <div className="navigation-buttons">
              <Button onClick={back} variant="contained" color="error">Back</Button>
              <Button type="submit" variant="contained" color="primary">Continue</Button>
            </div>

          </form>
      </FormProvider>
    </>
  
  )
}

export default Baptism