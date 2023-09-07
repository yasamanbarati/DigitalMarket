import { Box, styled } from '@mui/material'
import { Introduction } from 'components/introduction/introduction'
import { textStyle, titleStyle } from 'services/style/style'
import { useAppSelector } from 'setup/redux/react-hooks'

const IntroductionBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'auto',
  width: '100%',
  marginTop: '50px',
  zIndex: '3',
  '&::after': {
    content: `" "`,
    position: 'absolute',
    zIndex: '-1',
    width: '136px',
    height: '136px',
    left: '0',
    bottom: '0',
    borderRadius: '50%',
    background:
      'linear-gradient(324.53deg, #ec5e74 -27.5%, rgba(49, 94, 251, 0) 108.52%)',
  },
  '&::before': {
    content: `" "`,
    position: 'absolute',
    zIndex: '0',
    width: '78px',
    height: '78px',
    left: '90px',
    bottom: '-30px',
    borderRadius: '50%',
    background:
      'linear-gradient(273.54deg, #fad4da -2.84%, rgba(238, 238, 255, 0) 122.55%)',
    backdropFilter: 'blur(24.5px)',
  },
}))
export const IntroductionInvestment = () => {

  const content = useAppSelector(state => state.home.introduction_investment)

  return (
    <IntroductionBox>
      <Introduction
        GridDirection="row"
        ImageSrc={content.src}
        title={content.title}
        text={content.text}
        ButtonText={content.contentButton}
        PlayMode={false}
        contentMode={true}
        titleStyle={titleStyle}
        textStyle={textStyle}
        GridAlignItems="flex-start"
        Imagestyle={{
          objectFit: 'contain',
          maxWidth: "100%",
          width: { md: "auto", xs: "100%" },
          height: { md: '561px', xs: '509px' },
        }}
        buttonBoxMode={true}
      />
    </IntroductionBox>
  )
}
