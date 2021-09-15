import React from 'react'
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


function Modules() {
    return (
        <CDropdown component="nav-item" className="px-3 c-header-nav-item" variant="nav-item">
            <CDropdownToggle className="c-header-nav-link" >
                Modules
            </CDropdownToggle>
            <CDropdownMenu className="pt-0 mt-1 border border-secondary border-4" placement="bottom-start">
                <CDropdownItem className="text-primary" to="/finance"><CIcon name="cil-credit-card" className="mr-2 text-danger" />Finance</CDropdownItem>
                <CDropdownItem className="text-success" to="/human_resaurces"><CIcon name="cil-credit-card" className="mr-2 text-warning" />Human Resaurces</CDropdownItem>
                <CDropdownItem className="text-danger" to="/inventory_mrp"><CIcon name="cil-wallet" className="mr-2 text-info" />Inventory&MRP</CDropdownItem>
                <CDropdownItem className="text-warning" to="/marketing"><CIcon name="cil-chart-show" className="mr-2 text-primary" />Marketing</CDropdownItem>
                <CDropdownItem className="text-info" to="/productivity"><CIcon name="cil-chart-show" className="mr-2 text-success" />Productivity</CDropdownItem>
                <CDropdownItem className="text-primary" to="/sales"><CIcon name="cil-cart-loaded" className="mr-2 text-danger" />Sales</CDropdownItem>
                <CDropdownItem className="text-success" to="/services"><CIcon name="cil-sync" className="mr-2 text-warning" />Services</CDropdownItem>
                <CDropdownItem className="text-danger" to="websites"><CIcon name="cil-browser" className="mr-2 text-info" />Websites</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default Modules
