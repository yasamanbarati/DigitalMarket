import React from "react"
import { Box, styled } from "@mui/material"
import { Introduction } from "components/introduction/introduction"
import { ArticleOutlined } from "@mui/icons-material"
import { textStyle, titleStyle } from "services/style/style"
import { palette } from "setup/theme/palette"
import { useAppSelector } from "setup/redux/react-hooks"

const IntroductionBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "auto",
  width: "100%",
  marginTop: "50px",
  zIndex: "3",
  "&::after": {
    content: `" "`,
    position: "absolute",
    zIndex: "0",
    width: "136px",
    height: "136px",
    left: "-60px",
    top: "0",
    borderRadius: "50%",
    background:
      "linear-gradient(324.53deg, #ec5e74 -27.5%, rgba(49, 94, 251, 0) 108.52%)",
  },
  "&::before": {
    content: `" "`,
    position: "absolute",
    zIndex: "0",
    width: "78px",
    height: "78px",
    left: "30px",
    top: "75px",
    borderRadius: "50%",
    background:
      "linear-gradient(273.54deg, #fad4da -2.84%, rgba(238, 238, 255, 0) 122.55%)",
    backdropFilter: "blur(24.5px)",
  },
}))
const playButtonStyle = {
  width: {
    xs: "180px",
    sm: "170px",
  },
  height: "43px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& p": {
    color: palette.blue.main
  }
}
const Imagestyle = {
  objectFit: "contain",
  height: { md: "467px", sm: "397px", xs: "257px" },

}
export const TokenIntroduction = () => {

  const content = useAppSelector(state => state.home.token_introduction)

  return (
    <IntroductionBox>
      <Introduction
        GridDirection="row-reverse"
        ImageSrc={content.src}
        title={content.title}
        text={content.text}
        ButtonText={content.contentButton}
        ContentIcon={<ArticleOutlined />}
        playButtonText={content.playButton}
        playButtonStyle={playButtonStyle}
        PlayMode={true}
        contentMode={true}
        titleStyle={titleStyle}
        textStyle={textStyle}
        GridAlignItems="flex-start"
        Imagestyle={Imagestyle}
        GridMode={true}
        buttonBoxMode={true}
      />
    </IntroductionBox>
  )
}
