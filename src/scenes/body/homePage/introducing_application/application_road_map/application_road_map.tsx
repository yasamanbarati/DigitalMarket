import { Box, Container, Grid, styled } from '@mui/material'
import { useAppSelector } from 'setup/redux/react-hooks'
import { ApplicationRoadMapCard } from './application_road_map_card/application_road_map_card'
import vector from 'setup/assets/image/Vector 335.png'

const RoadMapBox = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("xs")]: {
        position: 'relative',
        minHeight: "800px",
        marginTop: "30px",
        "& .vectorImage": {
            display: "none",
        }
    },
    [theme.breakpoints.up("mobileM")]: {
        minHeight: "750px",
    },
    [theme.breakpoints.up("tabletL")]: {
        position: "absolute",
        "& .vectorImage": {
            display: "block",
            position: "absolute",
            right: "0",
            top: "-40px",
            [theme.breakpoints.up("tabletL")]: {
                width: "77%",
                height: "580px",
            },
            [theme.breakpoints.up("md")]: {
                width: "83%",
                height: "500px",
            },
            [theme.breakpoints.up("lg")]: {
                width: "84%",
            },
        }
    },
}))
const RoadMapContainer = styled(Container)(({ theme }) => ({
    height: 'auto',
    minHeight: 'inherit',
}))

export const ApplicationRoadMap = () => {

    const MapData = useAppSelector(state => state.home.roadMap)

    return (
        <RoadMapBox sx={{
            bottom: { laptop: "120px", tabletL: '60px', xs: '0' },
        }}>
            <img src={vector} className='vectorImage' />
            <RoadMapContainer fixed>
                <Grid position="relative" container>
                    {MapData.map((item) => {
                        return <ApplicationRoadMapCard
                            CardId={item.id}
                            title={item.title}
                            text={item.text} />
                    })}
                </Grid>
            </RoadMapContainer >
        </RoadMapBox>
    )
}
