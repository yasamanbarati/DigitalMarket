import { ArrowUpward } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"
import { useState } from "react"
import { palette } from "setup/theme/palette"

const ScrollButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    width: "52px",
    height: "52px",
    background: theme.palette.violet.main,
    color: palette.neutral.main,
    boxShadow: "0px 10px 16px #e83551c7",
    top: "-87px",
    left: "56px",
    zIndex: "3",
    cursor: "pointer",
    ":hover": {
        backgroundColor: theme.palette.violet.main,
        boxShadow: "0px 8px 10px #e83551c7",
    },
    [theme.breakpoints.down("tabletL")]: {
        top: "-50px",
        left: "15px",
    },
}))

export const FooterContentScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ScrollButton aria-label="Up" size="large" onClick={scrollToTop} >
            <ArrowUpward />
        </ScrollButton>
    )
}
