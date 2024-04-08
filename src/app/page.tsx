"use client"
import React, {useRef, useState} from 'react';
import {
    Typography,
    Button,
    Modal,
    Box,
    Grid,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem', // Increase the font size of the button
                    '&:hover': {
                        transform: 'scale(1.1)', // Make the button grow on hover
                    },
                },
            },
        },
    },
});
styled(Button)(() => ({
    justifyContent: 'flex-start',
    mb: 2,
    py: 1.5, // Increase padding vertically
    px: 3,  // Increase padding horizontally
    fontSize: '1.25rem', // Larger font size
    borderRadius: '30%',
    borderWidth: '3px',
    borderColor: 'purple',
    color: 'black', // Initial color is black
    transition: '0.3s', // Smooth transition for the hover effect
    '&:hover': {
        borderColor: 'purple',
        bgcolor: 'purple', // Fill color on hover
        color: 'common.white', // Text color on hover
    },
    '& .MuiButton-startIcon': {
        color: 'purple', // Star icon is purple
        fontSize: '2rem', // Increase the font size of the icon
    }
}));
const Crop = styled('div')(() => ({
    width: '100%', // Change width to be responsive based on the parent container
    height: '330px', // Set a fixed height for the cropping area
    overflow: 'hidden',
    backgroundColor:'lightgrey',
    display: 'flex', // Use flex to center the image inside the crop area
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: 'auto', // Set width to auto to maintain aspect ratio
        height: '100%', // Set height to 100% to fill the crop area
    },
}));

// Add the style for the Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflow: 'scroll',
};


export default function Home() {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    // Function to handle opening the dialog
    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    // Function to handle closing the dialog
    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    // @ts-ignore
    const handleOpenModal = (imgSrc) => {
        setSelectedImg(imgSrc);
        setOpen(true);
    };
    const handleCloseModal = () => setOpen(false);
    const secondPageRef = useRef<HTMLDivElement>(null);
    const scrollToSecondPage = () => {
        secondPageRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to handle button clicks
    // @ts-ignore
    const handleButtonClick = (text) => {
        if (text === 'About') {
            handleDialogOpen();
        }
        else if(text === 'Ilustración')
        {
            window.open('https://www.instagram.com/bruj4bab3/','_blank')
        }
        else {
            window.open('https://www.behance.net/ilicastro', '_blank');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundImage: 'url(/3.jpg)', // Assuming the image is directly inside the public directory
                    backgroundSize: '400px',
                    backgroundRepeat: 'repeat-5',
                    backgroundColor:'lightgrey'
                }}
            >
                <Typography variant="h1" component="h1" color={"black"}>
                    ECLIPSE STUDIO
                </Typography>
                {/* Positioned arrow icon at the bottom of the box */}
                <IconButton
                    sx={{
                        position: 'absolute',
                        bottom: '32px', // adjust as needed
                        color: 'black', // adjust arrow color as needed
                    }}
                    onClick={scrollToSecondPage}
                >
                    <ArrowDownwardIcon sx={{ fontSize: 60 }} />
                </IconButton>
            </Box>

            {/* Dialog for "About" section */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle sx={{backgroundColor:'lightgrey'}}>{"About Eclipse Studio"}</DialogTitle>
                <DialogContent sx={{backgroundColor:'lightgrey'}}>
                    <Typography sx={{backgroundColor:'lightgrey'}} variant="body1">
                        22-year-old Artist based out of Mexicali, Mexico.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{backgroundColor:'lightgrey'}}>
                    <Button onClick={handleDialogClose} sx={{color:'purple'}}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Box ref={secondPageRef} sx={{ py: 8, backgroundColor: 'lightgrey', width: '100%' }}>
                <Typography variant="h1" component="h1" color={"black"} style={{textAlign:'center',marginLeft:'8%', marginBottom:'3%'}}>
                    ECLIPSE STUDIO
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        {/* Button Grid Starts Here */}
                        <Box marginTop="80%" display="flex" flexDirection="column" alignItems="flex-start">
                            {['About', 'Ilustración', 'Fotografía'].map((text, index) => (
                                <Button
                                    key={index}
                                    startIcon={<StarIcon />}
                                    onClick={() => handleButtonClick(text)}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        mb: 2,
                                        py: 1.5, // Increase padding vertically
                                        px: 7,  // Increase padding horizontally
                                        fontSize: '2rem', // Larger font size,
                                        marginLeft:'7%',
                                        borderRadius:'30%',
                                        borderWidth:'3px',
                                        borderColor:'#9400d3',
                                        color: '#9400d3',
                                        transition: '0.3s', // Smooth transition for the hover effect
                                        '&:hover': {
                                            borderColor:'purple',
                                            bgcolor: 'purple', // Fill color on hover
                                            color: 'common.white',
                                            transform: 'scale(1.1)', // Grow on hover
                                        },
                                    }}
                                    variant="outlined"
                                    fullWidth
                                >
                                    {text}
                                </Button>
                            ))}
                        </Box>
                        {/* Button Grid Ends Here */}
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2}>
                            {/* Map your images here */}
                            {['/2.jpg', '/1.jpg', '/4.jpg'].map((imgSrc, index) => (
                                <Grid item xs={12} sm={6} md={index === 0 ? 4 : 8} key={imgSrc}>
                                    <Paper elevation={0}>
                                        <Crop>
                                            <img
                                                src={imgSrc}
                                                alt={`Artwork ${index}`}
                                                onClick={() => handleOpenModal(imgSrc)}
                                                style={{ cursor: 'pointer', borderRadius:'10%',border:'3px solid #9400d3' }}
                                            />
                                        </Crop>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            {/* Modal for displaying the clicked image */}
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </CloseIcon>
                    <img src={selectedImg} alt="Enlarged artwork" style={{ maxHeight: '80vh', maxWidth: '100%' }} />
                </Box>
            </Modal>
        </ThemeProvider>
    );
}
