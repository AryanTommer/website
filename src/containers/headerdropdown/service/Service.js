import React from 'react'
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


function Service() {
    return (
        <CDropdown component="nav-item" className="px-3 c-header-nav-item" variant="nav-item">
            <CDropdownToggle className="c-header-nav-link" >
                Service
            </CDropdownToggle>
            <CDropdownMenu className="pt-0 mt-1" placement="bottom-start" >
                <CDropdownItem to="/service/business_suport"><CIcon name="" className="mr-2 text-" />Business Suport</CDropdownItem>
                <CDropdownItem to="/service/cloud_service"><CIcon name="" className="mr-2 text-" />Cloud Service</CDropdownItem>
                <CDropdownItem to="/service/cyber_security"><CIcon name="" className="mr-2 text-" />Cyber Security</CDropdownItem>
                <CDropdownItem to="/service/print_digital_marketing"><CIcon name="" className="mr-2 text-" />Print/Digital Marketing</CDropdownItem>
                <CDropdownItem to="/service/seo"><CIcon name="" className="mr-2 text-" />SEO</CDropdownItem>
                <CDropdownItem to="/service/web_app_devlopement"><CIcon name="" className="mr-2 text-" />Web/App Devlopement</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default Service
