import { Fragment, useState } from 'react'
import { ReactComponent as IconMenu } from '../../../../setup/assets/image/menu.svg'
import { IconButton } from '@mui/material'
import { MenuBar } from './menuBar/menuBar'

export const NavbarMenuBar = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <IconButton
        color="default"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        sx={{
          ...(open && { display: 'flex' }),
          right: "0",
          position: 'absolute',
          top: '15px',
          MinHeight: "65px",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <IconMenu
          width="30px"
          height="25px" />
      </IconButton>
      <MenuBar open={open} handleDrawerClose={handleDrawerClose} />
    </Fragment>
  )
}
