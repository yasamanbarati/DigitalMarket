import { Box, styled } from "@mui/material"
import { Twitter, Instagram } from "@mui/icons-material"
import { ReactComponent as FaceBook } from 'setup/assets/image/FacebookSVG.svg'
import { ReactComponent as Discord } from 'setup/assets/image/DiscordSVG.svg'
import { ReactComponent as Telegram } from 'setup/assets/image/TelegramSVG.svg'
import { ReactComponent as Twitch } from 'setup/assets/image/TwitchSVG.svg'
import { palette } from "setup/theme/palette"

const SocialIconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginBottom: "40px",
    "svg": {
        marginLeft: "20px",
        width: "30px!important",
        height: "30px!important",
        "path": {
            fill: palette.neutral.main,
            transition: "0.8s ease",
        },
        "&:hover path": {
            fill: "#e83551c7",
            boxShadow: "0px 4px 6px rgba(249, 192, 60, 0.26)",
        }
    }
}))
export const FooterContentConnectionsSocialIcons = () => {
    return (
        <SocialIconsBox>
            <Twitter />
            <Instagram />
            <FaceBook />
            <Discord />
            <Telegram />
            <Twitch />
        </SocialIconsBox>
    )
}