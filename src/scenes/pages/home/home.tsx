import { Fragment, useEffect } from 'react'
import { Navbar } from 'scenes/header/navbar/navbar'
import { CoverSlider } from 'scenes/body/homePage/cover_slider/cover_slider'
import { initializeAppData } from 'services/server/service'
import { Footer } from 'scenes/footer/footer'
import { TokenIntroduction } from 'scenes/body/homePage/token_introduction/token_introduction'
import { TokenApplications } from 'scenes/body/homePage/token_applications/token_applications'

export const Home = () => {

  useEffect(() => { initializeAppData() }, [])
  return (
    <Fragment>
      <Navbar />
      <CoverSlider />
      <TokenIntroduction />
      <TokenApplications />
      <Footer />
    </Fragment>
  )
}
