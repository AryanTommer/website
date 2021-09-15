import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


function Resaurce() {
  return (
    <CDropdown  component="nav-item" className="px-3 c-header-nav-item" variant="nav-item">
      <CDropdownToggle className="c-header-nav-link" >
        Resaurce</CDropdownToggle>
      <CDropdownMenu className="pt-0 mt-1" placement="bottom-start">
        <CDropdownItem to="/resaurce/blog"><CIcon name="" className="mr-2 text-" />Blog</CDropdownItem>
        <CDropdownItem to="/resaurce/documantation"><CIcon name="" className="mr-2 text-" />Documentation</CDropdownItem>
        <CDropdownItem to="/resaurce/traning">Traning<CIcon name="" className="mr-2 text-" /></CDropdownItem>
        <CDropdownItem to="/resaurce/about_us"><CIcon name="" className="mr-2 text-" />About-Us</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default Resaurce
