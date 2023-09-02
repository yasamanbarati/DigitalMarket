import { Box, styled } from "@mui/material"
import { FooterContent } from "./footer_content/footer_content"

const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.footerBG,
  minHeight: "500px",
  borderRadius: "33px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& a": {
    textDecoration: "none",
  },
}))
export const Footer = () => {
  return (
    <FooterBox>
      <FooterContent />
    </FooterBox>
  )
}
