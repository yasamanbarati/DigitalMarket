import { useRef } from 'react'
import { Box, Grid, styled } from '@mui/material'
import Slider from 'react-slick'
import { CarouselArrows } from '../../../../helpers/carousel-dots'
import { TokenApplicationsCard } from './token_applications_card/token_applications_card'
import { settings } from './setting'
import { palette } from "setup/theme/palette"
import { useAppSelector } from 'setup/redux/react-hooks'
import { TextBox } from 'components/box/text_box/text_box'

const ApplicationsBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: "150px",
  margin: '50px 0',
  "& .slick-list": {
    paddingTop: "15px!important",
    paddingBottom: "15px!important"
  }
}))

const ContainerTitle = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})
const ContainerTitleStyle = {
  fontSize: {
    xs: "1.2rem",
    mobileL: "1.5rem",
    md: "2rem",
    lg: "2.5rem"
  },
  fontWeight: "800",
}
const cardStyle = {
  width: { sm: "95%", xs: "100%" },
  height: "83px",
  background: palette.neutral.main,
  border: "1px solid #EAE7FA",
  boxShadow: "0px 4px 30px rgb(0 0 0 / 4%)",
  borderRadius: "72px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "5px auto",
  flexDirection: "row",
  ":hover img": {
    background: "linear-gradient(211.51deg, #EAE7FA -10.82%, #e83551 77.71%)",
  },
  ":hover .CardAreaBox.MuiBox-root.css-0 h2": {
    color: "#e83551",
  },
}
const CardTitleStyle = {
  fontSize: {
    xs: "0.76rem",
    mobileL: "0.84rem",
    tabletM: "0.9rem",
    md: "1rem",
  },
  fontWeight: "700",
  marginLeft: "20px",
  color: "#13284e",
  transition: "0.8s ease-in-out",
}
const Imagestyle = {
  width: {
    xs: "50px",
    mobileL: "66px",
  },
  height: {
    xs: "50px",
    mobileL: "66px",
  },
  background: "linear-gradient(214.52deg, #EAE7FA -9.9%, #13284e 80.49%)",
  borderRadius: "50%",
  padding: "15px",
  objectFit: "contain",
  margin: '0 10px 0 17px',
  transition: "0.8s ease-in-out",
}
const CarouselArrowsStyle = {
  "& .css-1c8jjiv-MuiSvgIcon-root": {
    width: {
      xs: "0.8em",
      mobileL: "1em",
    },
    height: {
      xs: "0.8em",
      mobileL: "1em",
    },
  },
  position: "absolute",
  bottom: "-60px",
}
const SliderGrid = styled(Grid)(({ theme }) => ({
  "& .css-1l033if": {
    [theme.breakpoints.down('tabletL')]: {
      right: "-100px",
    },
    [theme.breakpoints.down('mobileL')]: {
      right: "-130px",
    },
  }
}))
export const TokenApplications = () => {

  const SliderItem = useAppSelector(state => state.home.token_applications)

  const carouselRef = useRef<Slider>(null)

  const handlePrevious = () => {
    carouselRef.current?.slickPrev()
  }

  const handleNext = () => {
    carouselRef.current?.slickNext()
  }

  return (
    <ApplicationsBox>
      <Box sx={{
        paddingLeft: { lg: "10%", laptop: "7%", sm: "10%", xs: "6%" }
      }}>
        <Grid container>
          <Grid item xs={5} sm={3}>
            <ContainerTitle>
              <TextBox text='Token applications' variant="h2" textStyle={ContainerTitleStyle} />
            </ContainerTitle>
          </Grid>
          <SliderGrid item xs={7} sm={9}>
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrevious}
              RightIconMode={true}
              leftIconMode={true}
              LeftStyle={{
                ...CarouselArrowsStyle,
                right: { sm: "150px", xs: "105px" },
                left: "auto"
              }}
              RightStyle={{
                ...CarouselArrowsStyle,
                right: { sm: "100px", xs: "55px" },
                left: "auto",
              }}>
              <Slider ref={carouselRef} {...settings}>
                {SliderItem.map((item) => {
                  return (
                    <TokenApplicationsCard
                      title={item.title}
                      titleStyle={CardTitleStyle}
                      cardStyle={cardStyle}
                      ImageSrc={item.src}
                      Imagestyle={Imagestyle}
                    />
                  )
                })}
              </Slider>
            </CarouselArrows>
          </SliderGrid>
        </Grid>
      </Box>
    </ApplicationsBox >
  )
}
