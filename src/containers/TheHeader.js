import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
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
import logo from "../assets/logo4.png";
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
        <Service/>
        < Industries/>
        < Soluction />
        < Resaurce/>
      </CHeaderNav>
       {/* <CHeaderNav className="d-md-down-none mr-auto justify-content-right">
      <CDropdown component="nav-item" className="px-3 " variant="nav-item">
          <CDropdownToggle >Modules</CDropdownToggle>
          <CDropdownMenu className="mt-1">
            <CDropdownItem to="/finance">Finance</CDropdownItem>
            <CDropdownItem to="/human_resaurces">Human Resaurces</CDropdownItem>
            <CDropdownItem to="/inventory_mrp">Inventory&MRP</CDropdownItem>
            <CDropdownItem to="/marketing">Marketing</CDropdownItem>
            <CDropdownItem to="/productivity">Productivity</CDropdownItem>
            <CDropdownItem to="/sales">Sales</CDropdownItem>
            <CDropdownItem to="/services">Services</CDropdownItem>
            <CDropdownItem to="websites">Websites</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CDropdown component="nav-item" className="px-3" variant="nav-item">
          <CDropdownToggle>Service</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem to="/service/business_suport">Business Suport</CDropdownItem>
            <CDropdownItem to="/service/cloud_service">Cloud Service</CDropdownItem>
            <CDropdownItem to="/service/cyber_security">Cyber Security</CDropdownItem>
            <CDropdownItem to="/service/print_digital_marketing">Print/Digital Marketing</CDropdownItem>
            <CDropdownItem to="/service/seo">SEO</CDropdownItem>
            <CDropdownItem to="/service/web_app_devlopement">Web/App Devlopement</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CDropdown component="nav-item" className="px-3" variant="nav-item">
          <CDropdownToggle>Industries</CDropdownToggle>
          <CDropdownMenu>
             <CDropdownItem to="industries/agriculture">Agriculture</CDropdownItem>
            <CDropdownItem to="/industries/all_type_shops">All-type Shops</CDropdownItem>
            <CDropdownItem to="/industries/all_type_stores">All-type stores</CDropdownItem>
            <CDropdownItem to="/industries/coaching_classes">Coaching Classes</CDropdownItem>
            <CDropdownItem to="/industries/pharma">Pharma</CDropdownItem>
            <CDropdownItem to="/industries/resturent">Rasturent</CDropdownItem>
            <CDropdownItem to="/industries/school">School</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
        <CDropdown component="nav-item" className="px-3" variant="nav-item">
          <CDropdownToggle>Soluction</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem to="/soluction/agriculturel">Agriculturel</CDropdownItem>
            <CDropdownItem to="/soluction/distribution">Distribution</CDropdownItem>
            <CDropdownItem to="/soluction/education">Education</CDropdownItem>
            <CDropdownItem to="/soluction/healthcare">HealthCare</CDropdownItem>
            <CDropdownItem to="/soluction/manufactur">Manufactur</CDropdownItem>
            <CDropdownItem to="/soluction/noon_profit">Non-Profit</CDropdownItem>
            <CDropdownItem to="/soluction/retail">Retail</CDropdownItem>
            <CDropdownItem to="/soluction/startup">StartUp</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CDropdown component="nav-item" className="px-3" variant="nav-item">
          <CDropdownToggle>Resaurce</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem to="/resaurce/blog">Blog</CDropdownItem>
            <CDropdownItem to="/resaurce/documantation">Documentation</CDropdownItem>
            <CDropdownItem to="/resaurce/traning">Traning</CDropdownItem>
            <CDropdownItem to="/resaurce/about_us">About-Us</CDropdownItem>
           </CDropdownMenu>
        </CDropdown>
        </CHeaderNav> */}
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