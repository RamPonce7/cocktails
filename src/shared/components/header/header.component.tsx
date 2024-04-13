

import { Box, Stack } from "@mui/material"
import { SearcherComponent } from "./searcher.component"




export const HeaderComponent = () => {
    return (

        <Box sx={{
            position: 'fixed',
            width: '100%',
            maxHeight: '80px',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <Stack direction="row" gap={1} sx={{
                boxShadow: 1,
                backgroundColor: 'primary.main',
                padding: 1,


            }}>
                <Box>
                    <img src="/logo.png" alt="logo" width={'100px'} />
                </Box>

                <Stack direction="row" gap={1} sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <SearcherComponent />
                </Stack>

            </Stack>
        </Box>

    )
}
