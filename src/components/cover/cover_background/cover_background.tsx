import { Box, styled } from '@mui/material'
import { CoverBackgroundButton } from './cover_background_Button/cover_background_Button'

const BackgroundBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "3",
    [theme.breakpoints.up('tabletL')]: {
        "&::after": {
            position: "absolute",
            content: `""`,
            width: "101px",
            height: "101px",
            bottom: "0px",
            background: theme.palette.violet.main,
            borderRadius: "0% 10% 0%",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
        },
    },
    "&::before": {
        position: "absolute",
        content: `""`,
        [theme.breakpoints.up('tabletL')]: {
            width: "78px",
            height: "78px",
        },
        width: "58px",
        height: "58px",
        top: "23%",
        background: theme.palette.blue.light,
        borderRadius: "0% 10% 0%",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
    },
}))
export const CoverBackground = () => {
    return (
        <BackgroundBox>
            <CoverBackgroundButton />
        </BackgroundBox>
    )
}
