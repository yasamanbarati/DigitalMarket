import { TextBox } from "components/box/text_box/text_box"
import { Link } from "react-router-dom"
import { FooterLinksProps } from "services/type/type"
import { palette } from "setup/theme/palette"

const titleStyle = {
  fontSize: {
    xs: "1rem",
    md: "1.2rem",
  },
  fontWeight: "700",
  lineHeight: "30px",
  textAlign: "right",
  marginBottom: "15px",
}
const textStyle = {
  fontSize: {
    xs: "1rem",
    sm: "0.86rem",
    md: "0.9rem",
  },
  fontWeight: "500",
  lineHeight: "193.5%",
  textAlign: "right",
  marginBottom: "8px",
  transition: "0.8s ease",
  "&:hover": {
    color: palette.violet.main
  }
}

export const FooterContentLinkItem = ({ id, title, links }: FooterLinksProps) => {

  return (
    <>
      <TextBox text={title} variant='h2' textColor={palette.violet.main} textStyle={titleStyle} />
      {links.map((item) => {
        return <Link to='/'>
          <TextBox text={item} variant='body1' textColor={palette.neutral.main} textStyle={textStyle} />
        </Link>
      })}
    </>
  )
}
