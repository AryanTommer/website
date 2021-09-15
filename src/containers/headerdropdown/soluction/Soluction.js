import React from 'react'
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


function Soluction() {
    return (
        <CDropdown  component="nav-item" className="px-3 c-header-nav-item" variant="nav-item">
        <CDropdownToggle className="c-header-nav-link" >
            Soluction</CDropdownToggle>
        <CDropdownMenu className="pt-0 mt-1" placement="bottom-start">
          <CDropdownItem to="/soluction/agriculturel"><CIcon name="" className="mr-2 text-" />Agriculturel</CDropdownItem>
          <CDropdownItem to="/soluction/distribution"><CIcon name="" className="mr-2 text-" />Distribution</CDropdownItem>
          <CDropdownItem to="/soluction/education"><CIcon name="" className="mr-2 text-" />Education</CDropdownItem>
          <CDropdownItem to="/soluction/healthcare"><CIcon name="" className="mr-2 text-" />HealthCare</CDropdownItem>
          <CDropdownItem to="/soluction/manufactur"><CIcon name="" className="mr-2 text-" />Manufactur</CDropdownItem>
          <CDropdownItem to="/soluction/noon_profit"><CIcon name="" className="mr-2 text-" />Non-Profit</CDropdownItem>
          <CDropdownItem to="/soluction/retail"><CIcon name="" className="mr-2 text-" />Retail</CDropdownItem>
          <CDropdownItem to="/soluction/startup"><CIcon name="" className="mr-2 text-" />StartUp</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
}

export default Soluction
