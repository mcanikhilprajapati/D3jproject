import React, { Component } from 'react'
import logo from 'assets/logo.png';
import { CardText, ChatDotsFill, FileEarmarkRuled, GraphUp, CardHeading, HouseDoor } from 'react-bootstrap-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Messages from 'Screens/Messages';
import DashboardContent from 'Screens/Dashboard/DashboardContent/DashboardContent';
import { Header } from 'CommonComponents';
import Automations from 'Screens/Automations/Automations';
import Groups from 'Screens/Groups/Groups';
import Analytics from 'Screens/Analytics/Analytics';
import Templates from 'Screens/Templates/Templates';
import WriteNewMsg from 'Screens/Dashboard/WriteNewMsg/WriteNewMsg';
import CreateAutomation from 'Screens/Dashboard/CreateAutomation/CreateAutomation';
import ScheduleMsg from 'Screens/Dashboard/ScheduleMsg/ScheduleMsg';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sidebarRoutes:[
                {
                    path: "/dashboard/dashboard",
                    exact: true,
                    main: DashboardContent,
                    name:'Dashboard',
                    img: HouseDoor
                },
                {
                    path: "/dashboard/messages",
                    exact: true,
                    main: Messages,
                    name:'Messages',
                    img: ChatDotsFill
                },
                {
                    path: "/dashboard/automations",
                    exact: true,
                    main: Automations,
                    name:'Automations',
                    img: CardText
                },
                {
                    path: "/dashboard/groups",
                    exact: true,
                    main: Groups,
                    name:'Groups/Lists',
                    img: CardHeading
                },
                {
                    path: "/dashboard/templates",
                    exact: true,
                    main: Templates,
                    name:'Templates',
                    img: FileEarmarkRuled
                },
                {
                    path: "/dashboard/analytics",
                    exact: true,
                    main: Analytics,
                    name:'Analytics',
                    img: GraphUp
                }
            ],
            dashboardInnerRoutes:[
                {
                    path: "/dashboard/dashboard/writenewmsg",
                    exact: true,
                    main: WriteNewMsg,
                    name:'Write New Message',
                },
                {
                    path: "/dashboard/dashboard/schedulemsg",
                    exact: true,
                    main: ScheduleMsg,
                    name:'Schedule New Message',
                },
                {
                    path: "/dashboard/dashboard/createautomation",
                    exact: true,
                    main: CreateAutomation,
                    name:'Create New Automation',
                }
            ],
            selectedMenuName:this.props.history.location ? this.props.history.location.pathname : '/dashboard/dashboard'
        }
    }
    
    /**
     * Selected menu state
    */
    handleMenuClick = (menuName) => {
        this.setState({
            selectedMenuName: menuName
        })
    }

    render() {
        const { sidebarRoutes, selectedMenuName, dashboardInnerRoutes } = this.state;
        return (
            <Router>
            <div className="flex-wrap flex-column">

                {/* Sidebar */}
                <div className="sidebar">
                    <img className="img" src={logo} alt="logo" />
                    <div className="sidebar-group">
                        {
                            sidebarRoutes.map((route, index) => (
                                <div key={index} className={selectedMenuName.includes(route.path) ? "sidebar-menu-list1" : "sidebar-menu-list"}>
                                    <div className={selectedMenuName.includes(route.path) ? "icon-list1" : "icon-list"}><route.img /></div>
                                    <Link onClick={() => this.handleMenuClick(route.path)} to={route.path} className={selectedMenuName.includes(route.path) ? "sidebar-menu-name1" : "sidebar-menu-name"} >{route.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Switch>
              {/* Static sidebar routing */}
                 <div className="flex-row">
                    <Header />
                    {sidebarRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                    {dashboardInnerRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                </div>
            </Switch>
        </Router>
        )
    }
}
export default withRouter(Sidebar)