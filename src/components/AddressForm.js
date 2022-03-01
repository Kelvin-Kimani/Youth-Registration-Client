import React, {useState} from "react";
import {InputLabel, Select, MenuItem, Button, Grid, Typography, Chip, Avatar} from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import FormInput from "./CustomTextField";
import './Address.css';

import { counties } from '../lib/counties';

const AddressForm = ({ personalDetails, back, next}) =>{

    const [countiesKE, setCountiesKE] = useState([]);
    const [county, setCounty] = useState('');

    const methods = useForm();

    return(
        <>
            <Typography variant="h4" gutterBottom>Physical Address</Typography>
                {/*PO Box form*/}
                <FormProvider {...methods}>
                    
                    <form onSubmit={methods.handleSubmit((data) =>next({...data, county}))}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>County</InputLabel>
                                <Select variant="standard" fullWidth>
                                    {counties.map((county) =>(
                                        <MenuItem key={county.countyCode} value={county.county}>
                                            {county.county}
                                        </MenuItem>
                                        )
                                    )}
                                </Select>
                            </Grid>
                            <FormInput label="P.O Box" name="POBox"/>
                        </Grid>

                        <div className="navigation-buttons">
                            <Button onClick={back} variant="contained" color="error">Back</Button>
                            <Button type="submit" variant="contained" color="primary">Continue</Button>
                        </div>

                    </form>

                </FormProvider>
        </>
    );


}

export default AddressForm