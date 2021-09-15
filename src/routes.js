import React from 'react';
//pages
const Cloud_for_all = React.lazy(() => import('./views/pages/cloud_for_all/Cloud_for_all'));
const Contect_us = React.lazy(() => import('./views/pages/contect_us/Contect_us'));
const Erp = React.lazy(() => import('./views/pages/erp/Erp'));
const Home = React.lazy(() => import('./views/pages/home/Home'));
const Startup_suport_plan = React.lazy(() => import('./views/pages/startup_suport_plan/Startup_suport_plan'));
// industries
 // {Agriculture,All_type_shops,All_type_stores,Coaching_classes,Pharma,Resturent,School}
const Agriculture = React.lazy(() => import('./views/industries/agriculture/Agriculture'));
const All_type_shops = React.lazy(() => import('./views/industries/all_type_shops/All_type_shops'));
const All_type_stores = React.lazy(() => import('./views/industries/all_type_stores/All_type_stores'));
const Coaching_classes = React.lazy(() => import('./views/industries/coaching_classes/Coaching_classes'));
const Pharma = React.lazy(() => import('./views/industries/pharma/Pharma'));
const Resturent = React.lazy(() => import('./views/industries/resturent/Resturent'));
const School = React.lazy(() => import('./views/industries/school/School'));
//modules/finance
//{accounting,documents,expenses,nvoicing,sign,spreadsheet_bi,}
const Finance = React.lazy(() => import('./views/modules/finance/main/Finance'));
const Accounting = React.lazy(() => import('./views/modules/finance/accounting/Accounting'));
const Documents = React.lazy(() => import('./views/modules/finance/documents/Documents'));
const Expenses = React.lazy(() => import('./views/modules/finance/expenses/Expenses'));
const Invoicing = React.lazy(() => import('./views/modules/finance/invoicing/Invoicing'));
const Sign = React.lazy(() => import('./views/modules/finance/sign/Sign'));
const Spreadsheet_bi = React.lazy(() => import('./views/modules/finance/spreadsheet_bi/Spreadsheet_bi'));
//modules/Human_resaurces 
//{appraisals,employees,fleet ,recruitment,,referrals ,time_off}
const Human_resaurces = React.lazy(() => import('./views/modules/human_resaurces/main/Human_resaurces'));
const Appraisals = React.lazy(() => import('./views/modules/human_resaurces/appraisals/Appraisals'));
const Employees = React.lazy(() => import('./views/modules/human_resaurces/employees/Employees'));
const Fleet = React.lazy(() => import('./views/modules/human_resaurces/fleet/Fleet'));
const Recruitment = React.lazy(() => import('./views/modules/human_resaurces/recruitment/Recruitment'));
const Referrals = React.lazy(() => import('./views/modules/human_resaurces/referrals/Referrals'));
const Time_off = React.lazy(() => import('./views/modules/human_resaurces/time_off/Time_off'));
//modules/inventory_and_MRP
//{Inventory ,Maintenance,Manufacturing,Plm,Purchase,Quality} 
const Inventory = React.lazy(() => import('./views/modules/inventory_mrp/inventory/Inventory'));
const Inventory_mrp = React.lazy(() => import('./views/modules/inventory_mrp/main/Inventory_mrp'));
const Maintenance = React.lazy(() => import('./views/modules/inventory_mrp/maintenance/Maintenance'));
const Manufacturing = React.lazy(() => import('./views/modules/inventory_mrp/manufacturing/Manufacturing'));
const Plm = React.lazy(() => import('./views/modules/inventory_mrp/plm/Plm'));
const Purchase = React.lazy(() => import('./views/modules/inventory_mrp/purchase/Purchase'));
const Quality = React.lazy(() => import('./views/modules/inventory_mrp/quality/Quality'));
//modules/marketiing 
//{Email_marketing,Events ,Marketing_automation, Sms_marketing,Social_marketing,Surveys}
const Marketing = React.lazy(() => import('./views/modules/marketing/main/Marketing'));
const Email_marketing = React.lazy(() => import('./views/modules/marketing/email_marketing/Email_marketing'));
const Events = React.lazy(() => import('./views/modules/marketing/events/Events'));
const Marketing_automation = React.lazy(() => import('./views/modules/marketing/marketing_automation/Marketing_automation'));
const Sms_marketing = React.lazy(() => import('./views/modules/marketing/sms_marketing/Sms_marketing'));
const Social_marketing = React.lazy(() => import('./views/modules/marketing/social_marketing/Social_marketing'));
const Surveys = React.lazy(() => import('./views/modules/marketing/surveys/Surveys'));
//modules/productivity
// { Approvals,Discuss,Iot,Voip}
const Productivity = React.lazy(() => import('./views/modules/productivity/main/Productivity'));
const Approvals = React.lazy(() => import('./views/modules/productivity/approvals/Approvals'));
const Discuss = React.lazy(() => import('./views/modules/productivity/discuss/Discuss'));
const Iot = React.lazy(() => import('./views/modules/productivity/iot/Iot'));
const Voip = React.lazy(() => import('./views/modules/productivity/voip/Voip'));
//modules/sales
//{CRM,Point_of_sale,Rental,Sale,Subscriptions,Amazon_connector}
//{,,,,,}
const Sales = React.lazy(() => import('./views/modules/sales/main/Sales'));
const Crm = React.lazy(() => import('./views/modules/sales/crm/Crm'));
const Point_of_sale = React.lazy(() => import('./views/modules/sales/point_of_sale/Point_of_sale'));
const Rental = React.lazy(() => import('./views/modules/sales/rental/Rental'));
const Sale = React.lazy(() => import('./views/modules/sales/sale/Sale'));
const Subscriptions = React.lazy(() => import('./views/modules/sales/subscriptions/Subscriptions'));
const Amazon_connector = React.lazy(() => import('./views/modules/sales/amazon_connector/Amazon_connector'));
//modules/services
//{Appointments , Helpdesk ,Hield_service, Planning, Project,Timesheet}
const Services = React.lazy(() => import('./views/modules/services/main/Services'));
const Appointments = React.lazy(() => import('./views/modules/services/appointments/Appointments'));
const Helpdesk = React.lazy(() => import('./views/modules/services/helpdesk/Helpdesk'));
const Field_service = React.lazy(() => import('./views/modules/services/field_service/Field_service'));
const Planning = React.lazy(() => import('./views/modules/services/planning/Planning'));
const Project = React.lazy(() => import('./views/modules/services/project/Project'));
const Timesheet = React.lazy(() => import('./views/modules/services/timesheet/Timesheet'));
//modules/websites
//{ Blogs ,Ecommerce,,Elearning ,Forum ,Livechat ,Website_builder}
const Websites = React.lazy(() => import('./views/modules/websites/main/Websites'));
const Blogs = React.lazy(() => import('./views/modules/websites/blogs/Blogs'));
const Ecommerce = React.lazy(() => import('./views/modules/websites/ecommerce/Ecommerce'));
const Elearning = React.lazy(() => import('./views/modules/websites/elearning/Elearning'));
const Forum = React.lazy(() => import('./views/modules/websites/forum/Forum'));
const Livechat = React.lazy(() => import('./views/modules/websites/livechat/Livechat'));
const Website_builder = React.lazy(() => import('./views/modules/websites/website_builder/Website_builder'));
//resaurce
// { About_us,Blog,Documantation,Traning}
const About_us = React.lazy(() => import('./views/resaurce/about_us/About_us'));
const Blog = React.lazy(() => import('./views/resaurce/blog/Blog'));
const Documantation = React.lazy(() => import('./views/resaurce/documantation/Documantation'));
const Traning = React.lazy(() => import('./views/resaurce/traning/Traning'));
//service
////{ path: '/service/', name: 'Service', component: Service },
const Business_suport = React.lazy(() => import('./views/service/business_suport/Business_suport'));
const Cloud_service = React.lazy(() => import('./views/service/cloud_service/Cloud_service'));
const Cyber_security = React.lazy(() => import('./views/service/cyber_security/Cyber_security'));
const Print_digital_marketing = React.lazy(() => import('./views/service/print_digital_marketing/Print_digital_marketing'));
const Seo = React.lazy(() => import('./views/service/seo/Seo'));
const Web_app_devlopement = React.lazy(() => import('./views/service/web_app_devlopement/Web_app_devlopement'));
//soluction
//{Agriculturel,Distributibution,Education,Healthcare,Manufactur,Noon_profit,Retail,Startup}
const Agriculturel = React.lazy(() => import('./views/soluction/agriculturel/Agriculturel'));
const Distribution = React.lazy(() => import('./views/soluction/distribution/Distribution'));
const Education = React.lazy(() => import('./views/soluction/education/Education'));
const Healthcare = React.lazy(() => import('./views/soluction/healthcare/Healthcare'));
const Manufactur = React.lazy(() => import('./views/soluction/manufactur/Manufactur'));
const Noon_profit = React.lazy(() => import('./views/soluction/noon_profit/Noon_profit'));
const Retail = React.lazy(() => import('./views/soluction/retail/Retail'));
const Startup = React.lazy(() => import('./views/soluction/startup/Startup'));

//route
const routes = [
  //pages
  { path: '/cloud_for_all', name: 'Cloud_for_all', component: Cloud_for_all },
  { path: '/contect_us', name: 'Contect_us', component: Contect_us },
  { path: '/erp', name: 'Erp', component: Erp },
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/startup_suport_plan', name: 'Startup_suport_plan', component: Startup_suport_plan },
  //modules
  { path: '/finance', exact: true, name: 'Finance', component: Finance },
  { path: '/human_resaurces', exact: true, name: 'Human_Resaurces', component: Human_resaurces },
  { path: '/inventory_mrp', exact: true, name: 'Inventory MRP', component: Inventory_mrp },
  { path: '/marketing', exact: true, name: 'Marketing', component: Marketing },
  { path: '/productivity', exact: true, name: 'Productivity', component: Productivity },
  { path: '/Sales', exact: true, name: 'Sales', component: Sales },
  { path: '/services', exact: true, name: 'Services', component: Services },
  { path: '/websites', exact: true, name: 'Websites', component: Websites },

  //modules/finance/
  //{accounting,documents,expenses,invoicing,sign,spreadsheet_bi}
  { path: '/finance/accounting', name: ' Accounting', component: Accounting },
  { path: '/finance/documents', name: 'Documents', component: Documents },
  { path: '/finance/expenses', name: 'Expenses', component: Expenses },
  { path: '/finance/invoicing', name: 'Invoicing', component: Invoicing },
  { path: '/finance/sign', name: 'Sign', component: Sign },
  { path: '/finance/spreadsheet_bi', name: 'Spreadsheet', component: Spreadsheet_bi },
  //modules/Humain_resurces
  //{appraisals,employees,fleet ,recruitment,,referrals ,time_off}
  { path: '/human_resaurces/appraisals', name: ' Appraisals', component: Appraisals },
  { path: '/human_resaurces/employees', name: 'Employees ', component: Employees },
  { path: '/human_resaurces/fleet', name: ' Fleet', component: Fleet },
  { path: '/human_resaurces/recruitment', name: 'Recruitment ', component: Recruitment },
  { path: '/human_resaurces/referrals ', name: 'Referrals  ', component: Referrals },
  { path: '/human_resaurces/time_off', name: ' Time Off', component: Time_off },
  //modules/inventory_and_MRP
  //{Inventory ,Maintenance,Manufacturing,Plm,Purchase,Quality} 
  { path: '/inventory_mrp/inventory', name: 'Inventory', component: Inventory },
  { path: '/inventory_mrp/maintenance', name: 'Maintenance', component: Maintenance },
  { path: '/inventory_mrp/manufacturing', name: 'Manufacturing', component: Manufacturing },
  { path: '/inventory_mrp/plm', name: 'Plm', component: Plm },
  { path: '/inventory_mrp/purchase', name: 'Purchase', component: Purchase },
  { path: '/inventory_mrp/quality', name: 'Quality', component: Quality },
  //modules/marketiing 
  //{Email_marketing,Events ,Marketing_automation, Sms_marketing,Social_marketing,Surveys}
  { path: '/marketing/email_marketing', name: 'Email Marketing', component: Email_marketing },
  { path: '/marketing/events', name: 'Events', component: Events },
  { path: '/marketing/marketing_automation', name: 'Marketing Automation', component: Marketing_automation },
  { path: '/marketing/sms_marketing', name: 'Sms Marketing', component: Sms_marketing },
  { path: '/marketing/social_marketing', name: 'Social Marketing', component: Social_marketing },
  { path: '/marketing/surveys', name: 'Surveys', component: Surveys },
  //modules/productivity
  { path: '/productivity/approvals', name: 'Approvals', component: Approvals },
  { path: '/productivity/discuss', name: 'Discuss', component: Discuss },
  { path: '/productivity/iot', name: 'Iot', component: Iot },
  { path: '/productivity/voip', name: 'Voip', component: Voip },
  //modules/sales
  //{CRM,Point_of_sale,Rental,Sale,Subscriptions,Amazon_connecto}
  { path: '/sales/crm', name: 'CRM', component: Crm },
  { path: '/sales/point_of_sale', name: 'Point Of Sale', component: Point_of_sale },
  { path: '/sales/rental', name: 'Rental', component: Rental },
  { path: '/sales/sale', name: 'Sale', component: Sale },
  { path: '/sales/subscriptions', name: 'Subscriptions', component: Subscriptions },
  { path: '/sales/amazon_connector', name: 'Amazon Connector', component: Amazon_connector },
  //modules/services
  //{Appointments , Helpdesk ,Hield_service, Planning, Project,Timesheet}
  { path: '/services/appointments', name: 'Appointments', component: Appointments },
  { path: '/services/helpdesk', name: 'helpdesk', component: Helpdesk },
  { path: '/services/field_service', name: 'Field Service', component: Field_service },
  { path: '/services/planning', name: 'Planning', component: Planning },
  { path: '/services/project', name: 'Project', component: Project },
  { path: '/services/timesheet', name: 'Timesheet', component: Timesheet },
  //modules/websites
  //{ Blogs ,Ecommerce,,Elearning ,Forum ,Livechat ,Website_builder}
  { path: '/websites/blogs', name: 'Blogs', component: Blogs },
  { path: '/websites/ecommerce', name: 'eCommerce', component: Ecommerce },
  { path: '/websites/elearning', name: 'eLearning', component: Elearning },
  { path: '/websites/forum', name: 'Forum', component: Forum },
  { path: '/websites/livechat', name: 'LiveChat', component: Livechat },
  { path: '/websites/ebsite_builder', name: 'Website Builder', component: Website_builder },
  //industries
 // {Agriculture,All_type_shops,All_type_stores,Coaching_classes,Pharma,Resturent,School}
 //{ path: '/industries', name: 'industres', component: industrie },
 { path: '/industries/agriculture', name: 'Agriculture', component: Agriculture },
 { path: '/industries/all_type_shops', name: 'All Type Shops', component: All_type_shops },
 { path: '/industries/all_type_stores', name: 'All_type_stores', component: All_type_stores },
 { path: '/industries/coaching_classes', name: 'Coaching_classes', component: Coaching_classes },
 { path: '/industries/pharma', name: 'Pharma', component: Pharma },
 { path: '/industries/resturent', name: 'Resturent', component: Resturent },
 { path: '/industries/School', name: 'School', component: School },
 //resaurce
// { About_us,Blog,Documantation,Traning}
 //{ path: '/resaurce', name: 'Resaurce', component: Resaurce },
 { path: '/resaurce/about_us', name: 'About_us', component: About_us },
 { path: '/resaurce/blog', name: 'Blog', component:Blog  },
 { path: '/resaurce/documantation', name: 'Documantation', component: Documantation },
 { path: '/resaurce/traning', name: 'Traning', component: Traning },
 //service
 //{Business_suport,Cloud_service,Cyber_security ,Print_digital_marketing,Seo,Web_app_devlopement}
 //{ path: '/service/', name: 'Service', component: Service },
 { path: '/service/business_suport', name: 'Business_suport', component:Business_suport  },
 { path: '/service/cloud_service', name: 'Cloud_service', component: Cloud_service },
 { path: '/service/cyber_security', name: 'Cyber_security', component: Cyber_security },
 { path: '/service/print_digital_marketing', name: 'Print_digital_marketing', component:Print_digital_marketing  },
 { path: '/service/seo', name: 'Seo', component: Seo },
 { path: '/service/web_app_devlopement', name: 'Web_app_devlopement', component:Web_app_devlopement  },
 //soluction
// {agriculturel,Distribution,Education,Healthcare,Manufactur,Noon_profit,Retail,Startup}
 //{ path: '/soluction', name: 'Soluction', component: Soluction },
 { path: '/soluction/agriculturel', name: 'Agriculturel', component: Agriculturel },
 { path: '/soluction/distribution', name: 'Distribution', component:Distribution  },
 { path: '/soluction/education', name: 'Education', component: Education },
 { path: '/soluction/healthcare', name: 'Healthcare', component: Healthcare },
 { path: '/soluction/manufactur', name: 'Manufactur', component: Manufactur },
 { path: '/soluction/noon_profit', name: 'Noon_profit', component:Noon_profit  },
 { path: '/soluction/retail', name: 'Retail', component: Retail },
 { path: '/soluction/startup', name: 'Startup', component: Startup },



];

export default routes;
