import { Box, Grid, styled, Typography } from '@mui/material'
import { CustomCard } from 'components/custom_card/custom_card'
import { textStyle } from 'services/style/style'
import { CustomCardProps } from 'services/type/type'

const CardStyle = {
    backgroundColor: "transparent",
    width: { xs: "100%", tabletL: "267px" },
    height: "auto",
    boxShadow: "none",
}
const CustomTypography = styled(Typography)(({ theme }) => ({
    position: "absolute",
    left: "-40px",
    fontWeight: "900",
    color: "#000000",
    opacity: "0.05",
    [theme.breakpoints.up("xs")]: {
        fontSize: "13rem",
        lineHeight: "13rem",
        top: "0px",
        left: "60px",
    },
    [theme.breakpoints.up("tabletL")]: {
        left: "-35px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "16rem",
        top: "-80px",
        lineHeight: "15rem",
    },
}))
const MarkBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    backgroundColor: theme.palette.neutral.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
        height: "31px",
        width: "31px",
        right: 'auto',
        top: '0',
        boxShadow: "0px 4px 59px rgba(0, 0, 0, 0.35)",
        borderRadius: "10px",
        left: "0",
    },
    [theme.breakpoints.up("tabletL")]: {
        height: "64px",
        width: "64px",
        left: '100px',
        top: '-60px',
        right: "auto",
        boxShadow: "0px 4px 59px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
    },
    "&::before": {
        position: "absolute",
        content: `""`,
        backgroundColor: "#c4c4c4",
        borderRadius: "10px",
        [theme.breakpoints.up("xs")]: {
            height: "15px",
            width: "15px",
        },
        [theme.breakpoints.up("tabletL")]: {
            height: "23px",
            width: "23px",
        },
    },
}))
const titleStyle = {
    fontSize: {
        xs: "1rem",
        sm: "1.5rem",
        md: "1.8rem",
    },
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "right",
    marginBottom: "15px",
}
const MapCardGrid = styled(Grid)(({ theme }) => ({
    position: "relative",
    [theme.breakpoints.down("tabletL")]: {
        paddingLeft: "40px",
        "&::before": {
            position: "absolute",
            content: `""`,
            width: "5px",
            height: "112%",
            left: "12px",
            top: "0",
            background: theme.palette.violet.main,
        },
    },
    [theme.breakpoints.down("mobileL")]: {
        "&::before": {
            height: "105%",
        },
    },
    ":nth-child(2)": {
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
            bottom: "-250px",
        },
        [theme.breakpoints.up("mobileM")]: {
            left: "auto",
            bottom: "-190px",
        },
        [theme.breakpoints.up("tabletL")]: {
            left: "28%",
            bottom: "-310px",
        },
        [theme.breakpoints.up("md")]: {
            left: "40%",
            bottom: "-270px",
        },
    },
    ":nth-child(3)": {
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
            bottom: "-500px",
            "& .RoadMapCardBox::before": {
                display: "none",
            },
        },
        [theme.breakpoints.up("mobileM")]: {
            right: "auto",
            bottom: "-390px",
        },
        [theme.breakpoints.up("tabletL")]: {
            right: "0",
            bottom: "-470px",
        },
        "& .css-1dacuyv": {
            top: "0px",
            [theme.breakpoints.up("tabletL")]: {
                top: "-50px",
            },
            [theme.breakpoints.up("md")]: {
                top: "-90px",
            },
            [theme.breakpoints.up("laptop")]: {
                top: "-110px",
            },
        }
    }
}))
export const ApplicationRoadMapCard = ({
    CardId,
    title,
    text
}: CustomCardProps) => {
    return (
        <MapCardGrid
            item
            tabletL={4}
            xs={12}
            className='RoadMapCardBox'>
            <MarkBox></MarkBox>
            <CustomTypography>{CardId}</CustomTypography>
            <CustomCard
                cardStyle={CardStyle}
                ImageMode={true}
                ContentMode={true}
                title={title}
                text={text}
                titleStyle={titleStyle}
                textStyle={textStyle}
                actionMode={false} />
        </MapCardGrid>
    )
}
