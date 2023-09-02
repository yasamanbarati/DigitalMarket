import { Box, Container, Grid, styled } from "@mui/material"
import { FooterContentScrollButton } from "./footer_content_scroll_button/footer_content_scroll_button"
import { FooterContentConnections } from "./footer_content_connections/footer_content_connections"
import { FooterContentLinks } from "./footer_content_link/footer_content_links"
import { FooterContentLogo } from "./footer_content_logo/footer_content_logo"

const FooterContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  Height: "auto",
}))
export const FooterContent = () => {
  return (
    <FooterContentBox>
      <Container fixed sx={{
        position: "relative",
      }}>
        <FooterContentScrollButton />
        <FooterContentLogo />
        <Grid container justifyContent='flex-end' paddingX={{ sm: 4, xs: 2 }}>
          <FooterContentLinks />
          <FooterContentConnections />
        </Grid>
      </Container>
    </FooterContentBox>
  )
}
