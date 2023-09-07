import { Box, Button, CircularProgress, Grid, IconButton, InputBase, Paper, styled } from "@mui/material"
import { TextBox } from "components/box/text_box/text_box"
import { FooterContentConnectionsSocialIcons } from "./footer_content_connections_social_icons/footer_content_connections_social_icons"
import { East } from "@mui/icons-material"
import { palette } from "setup/theme/palette"
import { useState } from "react"
import { ButtonProps } from "services/type/type"

const titleStyle = {
    fontSize: {
        xs: "1.2rem",
    },
    fontWeight: "700",
    textAlign: "left",
    marginBottom: "30px",
}

const PaperForm = styled(Paper)(({ theme }) => ({
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    [theme.breakpoints.down("md")]: {
        width: '100%',
    },
    height: "50px",
    borderRadius: "7px",
    marginBottom: "40px",
    "& .MuiInputBase-root": {
        flex: 1,
        padding: '10px 21px 10px 5px'
    },
    "& .MuiButtonBase-root": {
        borderRadius: "0 7px 7px 0",
        color: palette.neutral.main,
        backgroundColor: palette.violet.main,
        height: "100%",
        padding: '10px'
    }
}))
const progressStyle = {
    color: palette.violet.main,
    position: 'absolute',
    top: '50%',
    left: '30px',
    marginTop: '-12px',
    marginLeft: '-12px',
}
export const FooterContentConnections = ({ onClickEvent, disabled, isLoading }: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    const handleOnClick = async () => {
        if (isLoading || loading) return

        setLoading(true)

        if (onClickEvent) onClickEvent()

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    return (
        <Grid
            container
            md={4}
            xs={12}
            mt={5}
            display="flex"
            flexDirection="column">
            <Box>
                <TextBox text="be with us!" variant='h2' textColor={palette.violet.main} textStyle={titleStyle} />
                <FooterContentConnectionsSocialIcons />
            </Box>
            <TextBox text="Subscribe to our newsletter" variant='h2' textColor={palette.violet.main} textStyle={titleStyle} />

            <PaperForm>
                <InputBase
                    placeholder="info@gmial.com"
                    inputProps={{ 'aria-label': 'info@gmial.com' }}
                    disabled={loading ? true : false}
                />
                {loading ? (
                    <CircularProgress
                        size={30}
                        sx={progressStyle}
                    />
                ) : (

                    <Button
                        disabled={loading}
                        onClick={handleOnClick}
                        startIcon={<East />}
                    >
                    </Button>
                )}
            </PaperForm>

        </Grid>
    )
}
