import { CustomCard } from "components/custom_card/custom_card"
import { textStyle } from "services/style/style"
import { CustomCardProps } from "services/type/type"
import { palette } from "setup/theme/palette"

const cardStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: { laptop: "500px", xs: "480px" },
    width: "95%",
    borderRadius: "20px",
    background: palette.neutral.main,
    boxShadow: "0px 15px 8px rgba(0, 0, 0, 0.08)",
    margin: "30px 10px",
    "& .CardAreaBox": {
        width: { laptop: "318px", md: "380px", tabletM: "300px", xs: "90%" },
        height: { sm: "300px", xs: "280px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    "& .css-46bh2p-MuiCardContent-root": {
        height: { md: "90%", xs: "77%" },
    },
    "& .MuiBox-root.css-uolf1j": {
        justifyContent: "space-between",
        marginTop: "0",
    },
    "& .css-v2v1su-MuiCardActions-root": {
        paddingTop: "0px",
        paddingBottom: { md: "35px", xs: "25px" },
    }
}
const titleStyle = {
    fontSize: {
        xs: "1.2rem",
        mobileL: "1.5rem",
        tabletM: "1.3rem",
    },
    fontWeight: "800",
    lineHeight: "47px",
    letterSpacing: "0em",
    textAlign: "left",
    marginBottom: "15px"
}
const Imagestyle = {
    position: "absolute",
    top: { sm: "-45px", xs: "-10px" },
    zIndex: "5",
    objectFit: "contain",
    height: "279px",
    width: "339px",
}
export const IntroductionInvestmentCard = ({
    title,
    text,
    ImageSrc
}: CustomCardProps) => {
    return (
        <CustomCard
            cardStyle={cardStyle}
            title={title}
            text={text}
            ImageSrc={ImageSrc}
            titleStyle={titleStyle}
            Imagestyle={Imagestyle}
            textStyle={textStyle}
            actionsText="بیشتر"
            arrowBackColor="success"
            textColor="#2e7d32!important"
            actionMode={true}
            ContentMode={true}
            ImageMode={true} />
    )
}
