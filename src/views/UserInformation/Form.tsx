import * as React from 'react';
import {
    Button,
    StepButton,
    Step,
    Box,
    Stepper
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from 'react-hook-form';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import ContactInfo from './ContactInfo/ContactInfo';
import { paymentInfoSchema } from "../../ValidationSchema/paymentInfoSchema";
import { contactInfoSchema } from "../../ValidationSchema/contactInfoSchema";
import { personalInfoSchema } from "../../ValidationSchema/personalInfoSchema";

const steps = ['Personal Info', 'Contact Info', 'Payment Info'];

const Form: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [, setData] = React.useState({});

    const getValidationSchema = () => {
        switch (activeStep) {
            case 0:
                return personalInfoSchema;
            case 1:
                return contactInfoSchema;
            case 2:
                return paymentInfoSchema;
            default:
                return personalInfoSchema;
        }
    }


    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(getValidationSchema()),
        mode: "onChange",
    });

    const userInfoData = [
        {
            value: <PersonalInfo register={register} formState={formState} isTransaction={activeStep===0}/>,
        },
        {
            value: <ContactInfo register={register} formState={formState} isTransaction={activeStep===1}/>,
        },
        {
            value: <PaymentInfo register={register} formState={formState} isTransaction={activeStep===2}/>,
        }
    ]

    const totalSteps = () => {
        return steps.length;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const allStepsCompleted = () => {
        return totalSteps() === activeStep;
    };

    const handleNext = (values: FieldValues) => {
      if (Object.keys(formState.errors).length === 0) {
          setData({ ...values })
          let newSkipped = skipped;
          if (isStepSkipped(activeStep)) {
              newSkipped = new Set(newSkipped.values());
              newSkipped.delete(activeStep);
          }
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
      }
  };

    
    const handleStep = (step: number) => () => {
      if(step > activeStep) {
        const nextClickHandler = handleSubmit(handleNext);
        nextClickHandler()
      }
      else if (Object.keys(formState.errors).length === 0) {
            setActiveStep(step);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        reset({})
    };

    return (
<>
          {!allStepsCompleted() && 
          <React.Fragment>
            <div style={{textAlign:'center', margin:'0px 0px 40px', fontSize:'1.5rem', fontWeight:'600'}}>Complete your profile</div>
          <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label} completed={index< activeStep}>
                <StepButton color="inherit" onClick={handleStep(index)} disabled={(index-activeStep) > 1}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          </React.Fragment>
          }
          <Box sx={{ width: '100%', marginTop: '60px' }} mt={4}>
            {allStepsCompleted() ? (
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <CheckCircleIcon color='success' sx={{fontSize: 60}}/>
                  <div style={{marginLeft: '10px', fontSize:'1.25rem'}}>Thank you</div>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button variant='outlined' onClick={handleReset}>Reset</Button>
                </Box>
              </Box>
            ) : (
              <React.Fragment>
                   {userInfoData[activeStep].value}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px: 3}} mt={4}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    variant={'contained'}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {<Button onClick={handleSubmit(handleNext)}  variant={'contained'}>
                    {activeStep===2?'Submit' : 'Next'}
                  </Button>}
                </Box>
              </React.Fragment>
            )}
          </Box>
          </>
    );
}

export default Form;
