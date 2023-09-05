import { Grid, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LogoGrid = styled(Grid)(({ theme }) => ({
    height: "100%",
    "& h1": {
        fontWeight: "800",
        fontSize: "1rem",
        letterSpacing: "-1px",
        color: theme.palette.violet.main
    }
}))

export const NavbarLogo = () => {
    return (
        <LogoGrid lg={1} md={2} sm={6}>
            <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
                <Typography variant="h1" >DIGITALMarket</Typography>
            </Link>
        </LogoGrid>
    )
}

