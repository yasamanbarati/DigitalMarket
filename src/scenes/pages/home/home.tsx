import { Fragment, useEffect } from 'react'
import { Navbar } from 'scenes/header/navbar/navbar'
import { CoverSlider } from 'scenes/body/homePage/cover_slider/cover_slider'
import { initializeAppData } from 'services/server/service'
import { Footer } from 'scenes/footer/footer'

export const Home = () => {

  useEffect(() => { initializeAppData() }, [])
  return (
    <Fragment>
      <Navbar />
      <CoverSlider />
      <Footer />
    </Fragment>
  )
}
