

class Header extends React.Component 
{
    render()
    {
        return (
          <header> 
          <div className="wrapper"> 
            <div className="row justify-space-between">
              <ul className="nav-left">
                <li className="sidebar-trigger"> <i className="icon-menu"> </i></li>
                <li className="search-form"> 
                  <div className="icon-search"></div>
                </li>
              </ul>
              <ul className="nav-right gray-color">
                <li className="email usable"><i className="icon-mail"></i></li>
                <NotificationsUI notifications = {notifications}/>
                <UserProfileUI/>
              </ul> 
            </div>
          </div>
        </header>
      );
    }
}
