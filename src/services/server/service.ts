import {
  setFooterLinksAction,
  setIntroducingApplicationAction,
  setNavbarLinksAction,
  setroadMapAction,
  setSliderIntroductionAction,
  setTokenApplicationsAction,
  setTokenIntroductionAction,
  setIntroduction_investmentAction,
} from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import {
  links,
  roadMap,
  introducing_application,
  footerLinks,
  slider_introduction_investment,
  token_applications,
  token_introduction,
  introduction_investment,
} from './mock'

export const getHomePageData = () => {
  dispatch(setNavbarLinksAction(links))
  dispatch(setFooterLinksAction(footerLinks))
  dispatch(setroadMapAction(roadMap))
  dispatch(setIntroducingApplicationAction(introducing_application))
  dispatch(setSliderIntroductionAction(slider_introduction_investment))
  dispatch(setTokenApplicationsAction(token_applications))
  dispatch(setTokenIntroductionAction(token_introduction))
  dispatch(setIntroduction_investmentAction(introduction_investment))
}

export const initializeAppData = () => {
  getHomePageData()
}
