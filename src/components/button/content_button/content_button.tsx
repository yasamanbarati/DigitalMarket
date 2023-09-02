import { Button } from "@mui/material"
import { palette } from "setup/theme/palette"
import { ButtonProps } from "../../../services/type/type"

const ContentButton = ({ onClickEvent, sxStyle, icon, Text }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      onClick={onClickEvent}
      sx={{
        ...sxStyle,
        boxShadow: `0px 7px 20px 0px ${palette.violet.light}`,
        "&:hover": {
          boxShadow: `0px 0px 10px 2px ${palette.violet.light}`,
          color: palette.neutral.main,
        }
      }}
      startIcon={icon}
      color="violet">
      {Text}
    </Button>
  )
}

export default ContentButton
