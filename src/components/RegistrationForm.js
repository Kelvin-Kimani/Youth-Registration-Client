import React, {useState} from "react";
import {Paper, Stepper, Step, StepLabel, Typography, Divider, Button, Container} from '@mui/material';
import PersonalDetails from "./PersonalDetails";
import Address from "./AddressForm";

import './RegistrationForm.css'
import Baptism from "./Baptism";
import Church from "./Church";
import { useHistory } from "react-router-dom";


const steps = ["Personal Details", "Physical Address", "Baptism", "Church Involvement"];

const RegistrationForm = () =>{
    

    const [activeStep, setActiveStep] = useState(0);
    //State fields for all the forms
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        occupation: [],
        membershipNo: '',
    });

    const history = useHistory();

    
    const nextStep = () =>{
        if (activeStep === 5) return;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const prevStep = () =>setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setPersonalDetails(data);
        nextStep();

    };


    const lastStep = (data) => {
        setPersonalDetails(data);
        history.push("/confirmation");
    };


    const back = (data) => {
        setPersonalDetails(data);
        prevStep();

    };

    const handleChange = input => e =>{
        const data = e.target.value;
        setPersonalDetails(prevState=>{
            return {...prevState, [input]: data}
        })
    }

    const Form = () => {

        switch (activeStep){
            case 0:
                return (
                    <PersonalDetails handleChange={handleChange} next={next} personalDetails={personalDetails}/>
                )
            case 1:
                return (
                    <Address personalDetails={personalDetails} next={next} back={back}/>
                )
            case 2:
                return (
                   <Baptism personalDetails={personalDetails} next={next} back={back}/>
                )
            case 3:
                return (
                   <Church personalDetails={personalDetails} lastStep={lastStep} back={back}/>
                )
        }

    }

    return(
        <main>
            
            <Container>
                <Paper elevation={4} className="paper">
                    <Typography variant="h3" align="center" gutterBottom>Registration Form</Typography>
                    <Stepper activeStep={activeStep}>
                        {steps.map((step) =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {/* {activeStep === steps.length ? <Confirmation /> : <Form/>} */}
                   
                    <Form/>

                </Paper>
            </Container>

        </main>
    )
}

export default RegistrationForm