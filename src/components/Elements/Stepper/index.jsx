import { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ModeContext from '../../../context/modeContext';

const Stepper = (props) => {
    const { desc } = props;

    const theme = useTheme();

    // Perbaikan useContext dengan penggunaan yang benar
    const { mode } = useContext(ModeContext);

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const dataNum = desc.length;

    return (
        <>
        <div>{desc[activeStep]}</div>
        <MobileStepper
    variant="dots"
    steps={dataNum}
    position="static"
    activeStep={activeStep}
    sx={{
        maxWidth: "100%",
        flexGrow: 1,
        // Background Stepper mengikuti mode tema
        backgroundColor: mode === "light" ? "#f3f4f6" : "#1e1e1e",
        color: mode === "light" ? "#000000" : "#ffffff",

        // Dot non-aktif
        "& .MuiMobileStepper-dot": {
            backgroundColor: mode === "light" ? "#d3d3d3" : "#555555",
        },

        // Dot aktif
        "& .MuiMobileStepper-dotActive": {
            backgroundColor: mode === "light" ? "#299D91" : "#90caf9",
        },

        // Warna tombol
        "& .MuiButton-root": {
            color: mode === "light" ? "#000000" : "#ffffff",
        },
    }}
    nextButton={
        <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === dataNum - 1}
        >
            Next
            {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
        </Button>
    }
    backButton={
        <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
        >
            {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
        </Button>
    }
        />
        </>
    );
}

export default Stepper;
