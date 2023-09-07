import { Box, styled } from "@mui/material"
import { Introduction } from "components/introduction/introduction"
import { textStyle, titleStyle } from "services/style/style"
import { ApplicationRoadMap } from "./application_road_map/application_road_map"
import { useAppSelector } from "setup/redux/react-hooks"

const IntroducingApplicationBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "auto",
  minHeight: "1450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("tabletL")]: {
    minHeight: "auto",
    alignItems: "center",
  },
  width: "100%",
  margin: "50px 0",
  zIndex: "3",

  "&::before": {
    content: `""`,
    position: "absolute",
    zIndex: "0",
    [theme.breakpoints.up("xs")]: {
      width: "320px",
      height: "320px",
      top: "18px",
      borderRadius: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
      height: "400px",
    },
    [theme.breakpoints.up("tabletL")]: {
      right: "0",
      top: "90px",
      borderRadius: "50% 0% 0% 50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
      height: "500px",
      top: "5px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "590px",
      height: "590px",
    },
    background: theme.palette.blue.light,
  },
}))
const BoxItemStyle = styled(Box)(({ theme }) => ({
  "& .MuiGrid-container": {
    alignContent: "flex-start",
    "& .MuiGrid-item:first-child": {
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.up("tabletL")]: {
        flexBasis: "64%",
        maxWidth: "64%",
      },
      [theme.breakpoints.down("tabletL")]: {
        justifyContent: "center",
      },
    },
    "& .MuiGrid-item:last-child": {
      [theme.breakpoints.up("tabletL")]: {
        flexBasis: "36%",
        maxWidth: "36%",
        marginTop: "30px",
      }
    },
  },
}))

const Imagestyle = {
  objectFit: "fill",
  height: { md: "500px", sm: "400px", xs: "320px" },
  width: { md: "500px", sm: "400px", xs: "320px" },
  marginTop: { mobileL: "0", xs: "30px" },
  zIndex: "1",
}

export const IntroducingApplication = () => {

  const data = useAppSelector(state => state.home.IntroducingApplication)

  return (
    <IntroducingApplicationBox>
      <BoxItemStyle>
        <Introduction
          GridDirection="row-reverse"
          ImageSrc={data.src}
          title={data.title}
          text={data.text}
          PlayMode={false}
          contentMode={false}
          titleStyle={titleStyle}
          textStyle={textStyle}
          GridAlignItems="flex-start"
          Imagestyle={Imagestyle}
          GridMode={false}
          ApplicationButtonMode={true}
        />
      </BoxItemStyle>
      <ApplicationRoadMap />
    </IntroducingApplicationBox>
  )
}
