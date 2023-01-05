import React from 'react'
import logo from '../images/evolv/logo.svg'


function Header() {
    return (
        <>
            <nav className="navbar main-nav navbar-expand-lg px-2 pt-0 pb-2 customeNavBar border-bottom">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt="Evolv" className="brandImg" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">




                            {/* <li className="nav-item ">

                                <a className="nav-link" href="home.html">HOME</a>
                            </li>*/}


                            <li className="nav-item dropdown @@about  ">

                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">ABOUT
                                    <span><i className="ti-angle-down"></i></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li>

                                        <a className="dropdown-item @profile " href="profile.html">

                                            PROFILE</a>
                                    </li>


                                    {/*   <li>

                                        <a className="dropdown-item @@mission" href="mission.html">

                                            MISSION</a>
                            </li>*/}
                                    <li><a className="dropdown-item @@leadership" href="leadership.html">LEADERSHIP </a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown @@about  ">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">PROGRAMS
                                    <span><i className="ti-angle-down"></i></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item @startups " href="startups.html">STARTUPS</a></li>
                                    <li><a className="dropdown-item @@scaleups" href="investorworld.html">INVESTOR WORLD</a></li>
                                    <li><a className="dropdown-item @@cxo" href="enterpriseconnect.html">ENTERPRISE CONNECT </a></li>
                                    <li><a className="dropdown-item @@dei" href="dei.html">DIVERSITY EQUITY INCLUSION </a></li>
                                    <li><a className="dropdown-item @@sustainability" href="sustaiability.html">SUSTAINABILITY </a></li>
                                    <li><a className="dropdown-item @@genz" href="gen.html">GEN Z </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="impactcsr.html">IMPACT INVESTING &amp; CSR </a></li>
                                    <li><a className="dropdown-item @@govt" href="govt.html">GOVT</a></li>
                                </ul>
                            </li>






                            <li className="nav-item dropdown @@awards ">

                                <a className="nav-link dropdown-toggle" href="javascript:void(0)">AWARDS

                                    <span><i className="ti-angle-down"></i></span>

                                </a>


                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item @topstartups " href="topstartups.html">TOP STARTUPS </a></li>
                                    <li><a className="dropdown-item @@earlystate" href="earlystate.html"> EVOLV EARLY STAGE 1000 </a></li>
                                    <li><a className="dropdown-item @@fasttrack" href="fasttrack.html">EVOLV FAST-TRACK 1000 </a></li>
                                    <li><a className="dropdown-item @@ai" href="ai.html"> EVOLV AI 100 </a></li>
                                    <li><a className="dropdown-item @@digitalhealth" href="digitalhealth.html"> EVOLV 100 DIGITAL HEALTH </a></li>
                                    <li><a className="dropdown-item @@evolvgaming" href="evolvgaming.html">EVOLV 100 GAMING</a></li>
                                    <li><a className="dropdown-item @@cloudsecurity" href="cloudsecurity.html">EVOLV 100 CLOUD SECURITY  </a></li>
                                    <li><a className="dropdown-item @@evolvagritech" href="evolvagritech.html">EVOLV 100 AGRI TECH </a></li>
                                    <li><a className="dropdown-item @@edtech" href="edtech.html">EVOLV 100 ED TECH</a></li>
                                    <li><a className="dropdown-item @@evolvedrones" href="evolvedrones.html"> EVOLV 100 DRONES</a></li>

                                    <li><a className="dropdown-item @@evolvx" href="evolvx.html">EVOLV 100 XXX </a></li>
                                    <li><a className="dropdown-item @@evolvx" href="evolvx.html">EVOLV 100 XXX </a></li>
                                    <li><a className="dropdown-item @@evolvx" href="evolvx.html">EVOLV 100 XXX </a></li>
                                    <li--><a className="dropdown-item @@evolvx" href="evolvx.html">EVOLV 100 XXX </a></li-->

                                </ul>


                            </li>



                            <li className="nav-item dropdown @@calender">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">CALENDAR
                                    <span><i className="ti-angle-down"></i></span>
                                </a>

                                <ul className="dropdown-menu large">
                                    <li><a className="dropdown-item @@impact" href="techtrend.html">TECH TRENDS  </a></li>
                                    <li><a className="dropdown-item @@impact" href="impact.html">IMPACT INVESTING </a></li>
                                    <li><a className="dropdown-item @@appliedai" href="applied.html">APPLIED AI</a></li>
                                    <li><a className="dropdown-item @@crazyscience" href="crazy.html">CRAZY SCIENCE  </a></li>
                                    <li><a className="dropdown-item @@femaleunicorn" href="femaleunicon.html">FEMALE UNICORN FOUNDERS </a></li>
                                    <li><a className="dropdown-item @@crypto" href="crypto2025.html">CRYPTO 2025+</a></li>
                                    <li><a className="dropdown-item @@edtech" href="edtech2.html">EDTECH </a></li>
                                    <li><a className="dropdown-item @@agritech" href="agritech.html">AGRI TECH </a></li>
                                    <li><a className="dropdown-item @@drones" href="gaming.html"> GAMING   </a></li>
                                    <li><a className="dropdown-item @@drones" href="drones.html"> DRONES  </a></li>
                                    <li><a className="dropdown-item @@drones" href="supplychain.html"> SUPPLY CHAIN & LOGISTICS  </a></li>

                                    <li><a className="dropdown-item @@marketing" href="marketingin.html">MARKETING INNOVATIONS  </a></li>
                                    <li><a className="dropdown-item @@hydrogen" href="hydrogen.html">HYDROGEN  </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="impactinvesting.html">IMPACT INVESTING  </a></li>
                                    <li><a className="dropdown-item @@sellingtogovts" href="sellingtogovts.html">SELLING TO GOVTS  </a></li>
                                    <li><a className="dropdown-item @@smartcities" href="smartcities.html">SMART CITIES  </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="productmanagement.html">PRODUCT MANAGEMENT   </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="cx2.html">CX 360   </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="hydrogen.html">HYDROGEN INNOVATIONS  </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="3dprinting.html">3D PRINTING   </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="web.html">WEB 3.0  </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="5g.html">5G  </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="retooling.html">RETOOLING TO THE RECESSION </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="failedstarttup.html">FAILED STARTUP LEARNINGS </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="carboncapture.html">CARBON CAPTURE </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="spacetech.html">SPACETECH </a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="robotics.html">ROBOTICS</a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="alternateproteins.html">ALTERNATE PROTEINS</a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="insurtech.html">INSURTECH</a></li>
                                    <li><a className="dropdown-item @@impactinvesting" href="biotech.html">BIOTECH</a></li>





                                </ul>
                            </li>




                            <li className="nav-item @@G20 ">

                                <a className="nav-link" href="ecosystems.html">ECOSYSTEMS</a>
                            </li>






                            <li className="nav-item @@G20 ">

                                <a className="nav-link" href="gtwenty.html">G20</a>
                            </li>




                            <li className="nav-item dropdown @@membership">

                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">MEMBERSHIP
                                    <span><i className="ti-angle-down"></i></span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li>

                                        <a className="dropdown-item @@worldpremier" href="world.html">

                                            WORLD PREMIER</a></li>
                                    <li>

                                        <a className="dropdown-item @@ecocircle" href="eco.html">

                                            ECO CIRCLE</a></li>
                                </ul>
                            </li>







                            <li className="nav-item dropdown @@influencer">



                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">INFLUENCERS
                                    <span><i className="ti-angle-down"></i></span>
                                </a>

                                <ul className="dropdown-menu">

                                    <li>

                                        <a className="dropdown-item @@enterprise" href="enterprise.html">

                                            ENTERPRISE</a></li>

                                    <li>

                                        <a className="dropdown-item @@entrepreneur" href="entrepreneur.html">

                                            ENTREPRENEUR </a></li>


                                    <li>

                                        <a className="dropdown-item @@academia" href="academic.html">

                                            ACADEMIA </a></li>

                                    <li>

                                        <a className="dropdown-item @@venturecapital" href="venture.html">

                                            VENTURE CAPITAL</a></li>

                                </ul>
                            </li>

                            <li className="nav-item @@G20 ">
                                <a className="nav-link" href="#">LANGUAGE</a>
                            </li>




                        </ul >
                    </div >
                </div >
            </nav >



        </>
    )
}

export default Header