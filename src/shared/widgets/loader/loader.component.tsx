import { Box, CircularProgress } from "@mui/material"

export const LoaderComponent = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
            bgcolor: 'background.paper',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <CircularProgress />
        </Box>
    )
}