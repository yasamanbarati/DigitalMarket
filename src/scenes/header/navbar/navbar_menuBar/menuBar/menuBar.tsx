import { Drawer, styled, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { NavbarLink } from '../../navbar_link/navbar_link'

interface Props {
    handleDrawerClose: () => void
    open: boolean
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
const DrawerStyle = {
    width: "269px",
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: "269px",
        height: "calc( 100vh - 65px )",
        right: "0px",
        top: "65px",
        paddingleft: "40px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(16px)",
        position: "absolute"
    },
}
export const MenuBar = ({ handleDrawerClose, open }: Props) => {

    return (
        <Drawer
            sx={DrawerStyle}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader sx={{ justifyContent: "flex-start" }}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
            </DrawerHeader>
            <NavbarLink LinksDirection="column" GridDirection="column" GridWrap="nowrap" LinksWrap="nowrap" />
        </Drawer>
    )
}