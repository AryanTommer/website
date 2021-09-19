import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logo from "../assets/logo/logo4.png";
import {
  Modules, Service, Industries, Soluction, Resaurce
} from './index'

// routes config
import routes from '../routes'



const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  return (

    <CHeader withSubheader colorScheme="light" style={{ backgroundColor: '#e3f2fd' }} >

      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" src={logo} height="45" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto px-3 justify-content-right">
        < Modules />
        <Service />
        < Industries />
        < Soluction />
        < Resaurce />
      </CHeaderNav>

      <CHeaderNav className="ml-auto">
        <CHeaderNavItem className="mr-auto justify-content-right" placement="bottom-end">
          <CHeaderNavLink to=""><CButton color="light" shape="rounded-pill" size="sm">
            Startup Suport Plans
          </CButton></CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-2" placement="bottom-end">
          <CHeaderNavLink to=""><CButton color="primary" size="sm" shape="rounded-pill">
            Contect Us
          </CButton></CHeaderNavLink>
        </CHeaderNavItem>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />

      </CHeaderNav>


      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
          </CLink>
        </div>
      </CSubheader>

    </CHeader>

  )
}

export default TheHeader
//<CHeaderNav className="d-md-down-none mr-auto justify-content-right"expand="lg" colorScheme="dark" className="bg-dark">
//colorScheme="light" style={{ backgroundColor: '#e3f2fd' }}
//float-right
//d-flex justify-content-right