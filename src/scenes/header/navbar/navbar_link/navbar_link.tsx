import { Grid, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ContentButton from "components/button/content_button/content_button"
import { textStyle } from "services/style/style"
import { useAppSelector } from "setup/redux/react-hooks"
import { palette } from "setup/theme/palette"

interface props {
  GridDirection?: any
  LinksDirection?: any
  GridWrap?: any
  LinksWrap?: any
}
const LinkStyle = styled(Link)(({ theme }) => ({
  color: theme.palette.dark.main,
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  "& .css-we5jzv-MuiTypography-root": {
    color: theme.palette.black,
  },
  "& p": {
    transition: "0.8s ease-in-out",
  },
  "&:hover p": {
    color: palette.violet.main,
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    margin: "20px 0",
    justifyContent: "flex-start",
    width: "100%",
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "195px",
      right: "0",
      bottom: "-20px",
      height: "1px",
      backgroundColor: " rgba(0, 0, 0, 0.1)",
    },
    "&::before": {
      content: `''`,
      position: "absolute",
      width: "0",
      right: "0",
      bottom: "-20px",
      height: "2px",
      backgroundColor: " #e83551c7",
      transition: "ease 0.8s",
    },
    "&:hover::before": {
      width: "50%",
    }
  },
}))
const ContentButtonStyle = {
  boxShadow: "0px 20px 33px #e83551c7",
  borderRadius: "13px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "18px 21px",
  gap: "10px",
  width: "100%",
  height: "100%",
  fontSize: {
    xs: "0.8rem",
    sm: "0.85rem",
    md: "0.86rem",
    lg: "1rem"
  },
  fontWeight: "600",
  whiteSpace: "nowrap",
  transition: "0.8s ease-in-out",
}

export const NavbarLink = ({
  GridDirection,
  LinksDirection,
  GridWrap,
  LinksWrap,
}: props) => {
  const LinksItems = useAppSelector(state => state.home.NavbarLinks)

  return (
    <Grid
      container
      spacing={0}
      direction={GridDirection}
      flexWrap={GridWrap}
      justifyContent="space-between"
      height="100%"
      alignItems={{ xs: "flex-start", md: "center" }}>
      <Grid
        item
        lg={7}
        md={8}
        xs={11}
        direction={LinksDirection}
        flexWrap={LinksWrap}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: { xs: "flex-start", md: "center" },
          width: { xs: "86%", md: "auto" }
        }}>
        {LinksItems.map((itemLink, index) => (
          <Grid item md={2} width={{ xs: "100%", md: "auto" }}>
            <LinkStyle to={itemLink.path}>
              <Typography sx={textStyle}>{itemLink.name}</Typography>
            </LinkStyle>
          </Grid>
        ))}
      </Grid>
      <Grid item lg={2} md={3} height={{ xs: "50px" }} width={{ xs: "85%" }} marginBottom={{ xs: "30px", md: "auto" }}>
        <ContentButton
          Text="همین الان ثبت نام کن"
          sxStyle={ContentButtonStyle}
        />
      </Grid>
    </Grid >
  )
}
