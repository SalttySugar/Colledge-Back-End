
class Home extends Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return (<h1>Home</h1>)
    }
}




class Users extends Component
{
    render()
    {
        return(
           <Table Editor = {<PostEditor></PostEditor>}>
               <th>Заголовок</th>
               <th>Время</th>
               <th>Еще что то</th>
               <th>И так далее</th>
           </Table>
        )
    }
}


class App extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            'aside' : false,
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter()
    {
        this.setState({
            'aside' : true,
        })
    }

    onMouseLeave()
    {
        this.setState({
            'aside' : false,
        })
    }

    render() {

        return (
            <Router>
                <div>
                    <Aside class={this.state.aside ? "active" : ''} onMouseEnter ={this.onMouseEnter} onMouseLeave = {this.onMouseLeave}>
                    <li><Link to="/Admin/" replace={true}><i className="fa fa-home"></i> <span>Home</span></Link></li>
                    <li><Link to="/Admin/Media" replace={true}><i className="fa fa-picture-o" aria-hidden="true"></i> <span>Media</span></Link></li>
                    <li><Link to="/Admin/Posts" replace={true}><i className="fa fa-thumb-tack"></i> <span>Posts</span></Link></li>
                    <li><Link to="/Admin/Pages" replace={true}><i className="fa fa-clone"></i> <span>Pages</span></Link></li>
                    <li><Link to="/Admin/Users" replace={true}><i className="fa fa-users"></i><span>Users</span></Link></li>
                    </Aside>
                    <div className={"content " + (this.state.aside ? "aside-active" : '')}>
                        <Header/>
                        <Route exact path="/Admin" component={Home} />
                        <Route exact path="/Admin/Media" component={Media} />
                        <Route exact path="/Admin/Posts" component={Posts} />
                        <Route exact path="/Admin/Pages" component={Pages} />
                        <Route exact path="/Admin/Users" component={Users} />
                    </div>
                </div>
            </Router>
        );

    }

}
