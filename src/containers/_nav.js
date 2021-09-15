import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Erp',
    to: '/erp',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cloud For All',
    to: '/cloud_for_all',
    icon: 'cil-drop',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Startup Suport Plane',
    to: '/startup_suport_plan',
    icon: 'cil-drop',
  },
     
  {  
    _tag: 'CSidebarNavTitle',
    _children: ['Modules']
  },
  //finance
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Finance',
    route: '/finance',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Accounting',
        to: '/finance/accounting',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Documents',
        to: '/finance/documents',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expenses',
        to: '/finance/expenses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Invoicing',
        to: '/finance/invoicing',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sign',
        to: '/finance/sign',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Spreadsheet',
        to: '/finance/Spreadsheet_bi',
        badge: {
                   color: 'success',
                   text: 'NEW',
               },
      }
    ],
   },
   //human_resaurces
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Human Resaurces',
    route: '/human_resaurces',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Apraisals',
        to: '/human_resaurces/appraisals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employees',
        to: '/human_resaurces/employees',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fleet',
        to: '/human_resaurces/fleet',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Recruitment',
        to: '/human_resaurces/recruitment',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Referrals ',
        to: '/human_resaurces/referrals ',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Time Off',
        to: '/human_resaurces/time_off',
      },
    ]
  },
  //inventory_and_mrp
      

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Inventory And MRP',
    route: '/inventory_mrp',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Inventory',
        to: '/inventory_mrp/inventory',
        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Maintenance',
        to: '/inventory_mrp/maintenance',
        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manufacturing',
        to: '/inventory_mrp/manufacturing',
        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Plm',
        to: '/inventory_mrp/plm',
        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase',
        to: '/inventory_mrp/purchase',
        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quality',
        to: '/inventory_mrp/quality',
        
      },
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Marketing',
    route: '/marketing',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Email Marketing',
        to: '/marketing/Email_marketing',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Events',
        to: '/marketing/events',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Marketing Automation',
        to: '/marketing/marketing_automation',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sms Marketing',
        to: '/marketing/sms_marketing',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Social Marketing',
        to: '/marketing/social_marketing',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'surveys',
        to: '/marketing/surveys',
      },
      ]
  }, 
  
  
  {
    _tag: 'CSidebarNavDivider'
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Productivity',
    route: '/Productibity',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Approvals',
        to: '/productivity/approvals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Discuss',
        to: '/productivity/discuss',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Iot',
        to: '/productivity/iot',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Voip',
        to: '/productivity/voip',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sales',
    route: '/sales',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CRM',
        to: '/sales/crm',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Point Of Sale',
        to: '/sales/point_of_sale',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rental',
        to: '/sales/rental',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sale',
        to: '/sales/sale',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subscriptions',
        to: '/sales/subscriptions',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Amazon Connector',
        to: '/sales/amazon_connector',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Services',
    route: '/services',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Appointments',
        to: '/services/appointments',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Helpdesk',
        to: '/services/helpdesk',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Field_service,',
        to: '/services/field_service,',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Planning',
        to: '/services/planning',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Project',
        to: '/services/project',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Time Sheet',
        to: '/services/timesheet',
      },
   ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Websites',
    route: '/websites',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Blogs',
        to: '/websites/blogs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'eCommerce',
        to: '/websites/ecommerce',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'eLearning',
        to: '/websites/elearning',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forum',
        to: '/websites/forum',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'LiveChat',
        to: '/websites/livechat',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Website Bulder',
        to: '/websites/website_builder',
      },
    ]
  }
]


export default _nav
