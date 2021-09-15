import React from 'react'
import {
    CBadge,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


function Industries() {
    return (
        <CDropdown  component="nav-item" className="px-3 c-header-nav-item" variant="nav-item">
            <CDropdownToggle className="c-header-nav-link" >
                Industries</CDropdownToggle>
            <CDropdownMenu  className="pt-0 mt-1" placement="bottom-start">
                <CDropdownItem to="industries/agriculture"><CIcon name="" className="mr-2 text-" />Agriculture</CDropdownItem>
                <CDropdownItem to="/industries/all_type_shops"><CIcon name="" className="mr-2 text-" />All-type Shops</CDropdownItem>
                <CDropdownItem to="/industries/all_type_stores"><CIcon name="" className="mr-2 text-" />All-type stores</CDropdownItem>
                <CDropdownItem to="/industries/coaching_classes"><CIcon name="" className="mr-2 text-" />Coaching Classes</CDropdownItem>
                <CDropdownItem to="/industries/pharma"><CIcon name="" className="mr-2 text-" />Pharma</CDropdownItem>
                <CDropdownItem to="/industries/resturent"><CIcon name="" className="mr-2 text-" />Rasturent</CDropdownItem>
                <CDropdownItem to="/industries/school"><CIcon name="" className="mr-2 text-" />School</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default Industries
