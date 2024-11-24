import { Box } from '@mui/material'
import Footer from './Footer'
import Header from './Header'

export const GeneralLayout = ({children}) => {
    return (
        <Box sx={{
            px: 8,
            py: 3
        }}>
            <Header />
                {children}
            <Footer />
        </Box>
    )
}