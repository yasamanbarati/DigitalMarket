import { Link } from 'react-router-dom'
import { Box, styled, Typography } from '@mui/material'

const LogoBox = styled(Box)(({ theme }) => ({
  "& a": {
    height: "75px",
    width: "235px",
  },
  "& h1": {
    fontWeight: "800",
    fontSize: "2rem",
    letterSpacing: "-1px",
    color: theme.palette.blue.light
  }
}))

export const FooterContentLogo = () => {
  return (
    <LogoBox
      sx={{
        marginTop: { laptop: "60px", tabletL: "50px", xs: "30px" }
      }}>
      <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
        <Typography variant="h1" >DIGITALMarket</Typography>
      </Link>
    </LogoBox>
  )
}
