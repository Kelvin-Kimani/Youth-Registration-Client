import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {TextField, Grid} from "@mui/material";

const FormInput = ({ name, label }) =>{
    const { control } = useFormContext();

    return(
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                name={name}
                control={control}
                render={({ field }) =>(
                    <TextField
                        label={label}
                        fullWidth
                        variant="standard"
                    />
                )}
            />
        </Grid>
    );
}

export default FormInput