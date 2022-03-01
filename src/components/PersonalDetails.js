import React from "react";
import { Button, Grid, Typography, Chip, Avatar, TextField} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import instagramavatar from '../assets/instagram-logo.png'
import twitteravatar from '../assets/twitter-logo.png'
import facebookavatar from '../assets/facebook-logo.png'
import './PersonalDetails.css'

const PersonalDetails = ({ next, handleChange}) =>{

    const { register, handleSubmit, formState:{errors}} = useForm();
    // const methods = useForm();

    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <>
            <div className="personalDetails">
                <Typography variant="h4" gutterBottom>Personal Details</Typography>
                
                    <form onSubmit={handleSubmit((data) => {
                            console.log(data)
                            next({ ...data})
                            }                        
                        )}>
                        <Grid container spacing={5}>
                            {/* <FormInput label="First Name" name="firstName"/>
                            <FormInput label="Last Name" name="lastName"/>
                            <FormInput label="Occupation" name="occupation"/>
                            <FormInput label="Phone Number" name="phoneNumber"/>
                            <FormInput label="Email Address" name="emailAddress"/> */}


                    <TextField {...register("firstName", {required: {value: true, message:"First Name is required"}})} 
                        label="First Name"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('firstName')}
                    />

                    <TextField {...register("lastName", {required: {value: true, message:"Last Name is required"}})} 
                        label="Last Name"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('lastName')}
                    />

                            <div>
                               <Chip
                                    avatar={<Avatar alt="Natacha" src={twitteravatar} />}
                                    label="Twitter"
                                    variant="outlined"
                                />

                               <Chip
                                    avatar={<Avatar alt="Natacha" src={instagramavatar} />}
                                   label="Instagram"
                                   variant="outlined"
                                />

                               <Chip
                                  avatar={<Avatar alt="Natacha" src={facebookavatar} />}
                                  label="Facebook"
                                  variant="outlined"
                                  color="success"
                               />

                            </div>

                        </Grid>

                        <Button type="submit" variant="contained" color="primary" className="continuebtn">Continue</Button>

                    </form>

            
            </div>

        </>

    );
}

export default PersonalDetails