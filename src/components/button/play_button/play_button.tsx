import { IconButton, SxProps } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import { TextBox } from 'components/box/text_box/text_box'
import { textStyle } from 'services/style/style'
import { palette } from "setup/theme/palette"

interface Play_button {
    Text: string | undefined
    onClickEvent?: () => unknown
    IconButtonStyle?: SxProps
}

const PlayArrowStyle = {
    width: { md: "44px", xs: "40px" },
    height: { md: "44px", xs: "40px" },
    color: palette.neutral.main,
    background: palette.blue.main,
    boxShadow: "0px 4px 44px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    transform: "inherit",
}
export const PlayButton = ({ onClickEvent, Text, IconButtonStyle }: Play_button) => {
    return (
        <IconButton
            disableFocusRipple={true}
            disableRipple={false}
            aria-label="play/pause" sx={{
                ...IconButtonStyle,
                minWidth: "165px",
                height: "50px",
                "&:hover": { backgroundColor: "transparent" }
            }} >
            <PlayArrow sx={PlayArrowStyle} />
            <TextBox text={Text} textStyle={textStyle} />
        </IconButton>
    )
}
