import { SearchOff } from "@mui/icons-material"
import { Box, IconButton, Stack } from "@mui/material"



export const HeaderComponent = () => {
    return (
        <Box sx={{
            position: 'fixed',
            width: '100%',
            maxHeight: '80px',
            top: 0,
            left: 0,
        }}>
            <Stack direction="row" gap={1} sx={{
                boxShadow: 1,
                backgroundColor: 'primary.main',
                padding: 1,


            }}>
                <Box>
                    <img src="/logo.png" alt="logo" width={'100px'} />
                </Box>
                <Box>
                    <IconButton>
                        <SearchOff />
                    </IconButton>
                </Box>


            </Stack>
        </Box>
    )
}
