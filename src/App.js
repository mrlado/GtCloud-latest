import logo from './logo.svg';
import './App.css';
import { Layout } from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import ScreenLayout from './Screens/ScreenLayout';
import PartnerPage from './Screens/PartnerPage';

import ITInfrustructureImg from './Assets/Pagescreens/Asset 5@4x.png'
import NetworkScreenImg from './Assets/Pagescreens/Asset 6@4x.png'
import CyberSecurityImg from './Assets/Pagescreens/Asset 7@4x.png'
import ManagedSecurityServices from './Assets/Pagescreens/CloudandSecurityServices.png'
import CloudandSecurityServices from './Assets/Pagescreens/Asset 1@4x.png'
import ManagedServicesimg from './Assets/Pagescreens/ManagedServices.png'
import ManagedServices from './Screens/ManagedServices';
import ContactPage from './Screens/ContactPage';
import VendorsHeroImg from './Assets/VendorPageHero.png'
import VendorPages from './Screens/VendorPages';
import ParterPageImg from './Assets/PartnerPageHeroimg.png'
import AboutUs from './Screens/AboutUs';
import AboutUsimg from './Assets/AboutUspageHeroImg.png';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      
    <Navigation/>
    <Routes>


    <Route path="/" element={<Layout/>}/>
    
    <Route path='/ITInfrustructure' element={
    <ScreenLayout 
        HeroTitle='IT Infrastructure' 
        HeroText='IT Infrastructure allows organizations to constantly provide their employees, partners and customers with IT solutions, assistance and services.' 
        HeroImg={ITInfrustructureImg} 
        DescriptionTitle='Our portfolio thoroughly includes'
        textone='Basic IT infrastructure - servers, high-performance computing systems, storage arrays, backup and archiving systems.'
        texttwo='Hyperconverged infrastructure - software defined controlled hardware that combines all the elements of a traditional data center: storage, computing, network and control systems.'
        textthree='Backup and archiving system - a system of backup copies for business-critical data and databases.'
        textfoor='Virtual servers and Desktop infrastructure - Consolidation of the physical environment into virtual one in order to ensure proper resource allocation, management and costs optimization.'
        textfive={''}
        textsix={''}
        textseven={''}
    />}
    />
        <Route path='/NetworkInfrastructure' element={
            <ScreenLayout 
            HeroTitle='Network Infrastructure' 
            HeroText='Network infrastructure is fundamentally vital for the success of any organization. An increase in risks related to traffic, devices and security makes network infrastructure more complex. According to our experience, we ensure the creation of a reliable, secure and flexible network infrastructure.' 
            HeroImg={NetworkScreenImg} 
            DescriptionTitle='Our portfolio thoroughly includes'
            textone='Basic network infrastructure - Creation of corporate computer networks, supplying of management and monitoring systems.'
            texttwo='SDN decision - software-defined network infrastructure.'
            textthree='Wireless network - Providing wireless network design, topology and implementation.'
            textfoor='Telephony - Arranging of telephone center and video conference systems.'
            textfive={'Network security - Ensuring of hardware and technical network security.'}
            textsix={''}
            textseven={''}
    />}
    />

        <Route path='/CyberSecurity' element={
                  <ScreenLayout 
                  HeroTitle='Cyber Security' 
                  HeroText='The introduction of new technologies and services is always associated with risks because precisely in similar solutions and devices cyber criminals are looking for weak points to make your infrastructure easily vulnerable to external or internal threats.' 
                  HeroImg={CyberSecurityImg} 
                  DescriptionTitle='We offer the following basic services to our customers'
                  textone='Security Information and Event Management system (SIEM)'
                  texttwo='Data Loss Prevention system (DLP), a solution to prevent leak of confidential
                  information from the company perimeter
                  '
                  textthree='Privileged Access Management solution (PAM)'
                  textfoor='Protection of work stations and servers'
                  textfive={'Vulnerability scanners are software devices that are diagnosing and monitoring networked computers'}
                  textsix={'Web Application Firewall'}
                  textseven={'Protection of electronic mails from harmful viruses'}
          />}
          />
        <Route path='/ManagedSecurityServices' element={
                  <ScreenLayout 
                  HeroTitle='Managed Security Services' 
                  HeroText='Our team is actively working on Penetration Testing and red/blue team simulations. As in other directions, also in this regard, active attention is dedicated to the certification process and obtaining all necessary accreditations for both, the institution and team members.' 
                  HeroImg={ManagedSecurityServices} 
                  DescriptionTitle='We offer the following main services to our customers'
                  textone='SOCaaS (SOC as a Service) - Security Operations Center as a service.'
                  texttwo='Penetration Testing - penetration and security testing'
                  textthree='Implementation of standards and supporting certification process (ISO27001,
                    PCI-DSS, NBG CyberSecurity Framework, SOC 2, Swift CSP).
                    '
                  textfoor='Consultation regarding informational and IT security.'
                  textfive={'Assessment of technical controls.'}
                  textsix={'Managing and reacting to incidents.'}
                  textseven={'Assessment of the environment and audit.'}
          />}
          />

        <Route path='/CloudandSecurityServices' element={
                  <ScreenLayout 
                  HeroTitle='Cloud and Security Services' 
                  HeroText='' 
                  HeroImg={CloudandSecurityServices} 
                  DescriptionTitle=''
                  textone='AWS Cloud Full Infrastructure Planning, Security, Bill Optimization, Availability Zone design'
                  texttwo='Azure Cloud Full Infrastructure Planning, Security, Bill Optimization'
                  textthree='Oracle Cloud Full Infrastructure Planning, Security, Bill Optimization'
                  textfoor='On-Premise and Hybrid Data center Design and full implementation.'
                  textfive={''}
                  textsix={''}
                  textseven={''}
          />}
          />
        <Route path='/ManagedServices' element={
                  <ManagedServices 
                  HeroTitle='Managed Services' 
                  HeroText='GT Cloud engineering team give customers access to experts that have real experience in developing and implementing large-scale projects. This is our ability to understand more about your business problem and help you to solve existing ones.
                  GT Cloud engineering team has experience in developing and implementing large-scale projects. This is our aim to
                  understand more about your business problem and help you to solve existing ones.' 
                  HeroImg={ManagedServicesimg} 
                  DescriptionTitle='Professional services'
          />}
          />
          <Route path='/vendors' element={
                  <VendorPages 
                  HeroTitle='Vendors' 
                  HeroImg={VendorsHeroImg} 
                  
          />}
          />
          <Route path='/partners' element={
                  <PartnerPage 
                  HeroTitle='Partners' 
                  HeroImg={ParterPageImg} 
                  
          />}
          />

          <Route path='/aboutus' element={
                  <AboutUs 
                  HeroTitle='About us' 
                  HeroImg={AboutUsimg} 
                  
          />}
          />
              {/* /aboutus */}

       <Route path='/ContactPage' element={<ContactPage/>}/>



      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
