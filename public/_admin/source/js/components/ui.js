


class Aside extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <aside className={this.props.class} id="aside" onMouseEnter = {this.props.onMouseEnter} onMouseLeave = {this.props.onMouseLeave} >
                <div className="logo-container">
                    <div className="wrapper">
                    <h4 className="bold">K</h4>
                    </div>
                </div>
                <nav className="main-nav">
                    <ul>
                        {this.props.children}
                    </ul>
                </nav>
            </aside>
        );
    }

}



class UIReveal extends Component
{
    constructor(props)
    {
        super(props);
        this.outsideClick  = this.outsideClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount()
    {
        document.addEventListener('mousedown' , this.outsideClick);
    }

    componentWillUnmount()
    {
        document.removeEventListener('mousedown', this.outsideClick);
    }


    setWrapperRef(node)
    {
        this.wrapperRef = node;
    }

    outsideClick(event)
    {

        console.log('outside');
        console.log(!this.wrapperRef.contains(event.target));
        if(this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.classList.contains('ui-reveal-container'))
        {
            this.props.closeHandler();
        }
    }


}


class ContextMenu extends UIReveal
{
    constructor(props)
    {
        super(props);
    }

    outsideClick()
    {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target))
        {
            this.props.closeHandler();
        }
    }
    render()
    {
        return(

            <ul ref={this.setWrapperRef} style={this.props.style} ref={this.setWrapperRef} className="ui-context-menu">
                {this.props.children}
            </ul>
        )
    }
}


class ContextMenuItem extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <li onClick={this.props.onClick} className="ui-context-menu-item usable">{this.props.children}</li>
    }

    //TODO: CAST TO ANOTHER CLASS
}
class Filter  extends UIReveal
{
    constructor(props)
    {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.outsideClick = this.outsideClick.bind(this);
    }

    render()
    {
        return(
            <div className="ui-filtering-tool" ref={this.setWrapperRef} >
                <div className="wrapper">
                    {this.props.children}
                </div>
         </div>
        );
    }

}

class Editor extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        tinymce.init({
            selector: '#Editor',
            skins   : false,
        });
    }

    componentWillUnmount()
    {
        tinymce.remove("#Editor");
    }

    render()
    {
        return (
            <textarea name = "this.props.name" id="Editor"  onKeyUp={()=>{console.log('work!!')}} onChange={this.props.onChange}>{this.props.children}</textarea>
        )
    }
}
//TODO: change edtior from container to component*
class PostEditor extends UIReveal
{
    constructor(props)
    {
        super(props);

        this.onChangeHandler    = this.onChangeHandler.bind(this);
        this.SubmitEventHandler = this.SubmitEventHandler.bind(this);
        this.props.params.post = this.props.params.post ? this.props.params.post : {
            'title'     : '',
            'subtitle'  : '',
            'content'   : '',
        }

    }

    onChangeHandler(event)
    {
        console.log(event.target);

        switch(event.target.getAttribute('name'))
        {
            case 'post-title'    : this.props.params.post.title    = event.target.value; break;
            case 'post-subtitle' : this.props.params.post.subtitle = event.target.value; break;
            case 'post-content'  :  this.props.params.post.subtitle = event.target.value; break;

        }
    }

    SubmitEventHandler()
    {
        switch(this.props.params.mode)
        {
            case "edit" :
                axios.post(`${document.location.origin}/Admin/Post/${this.props.params.post.id}/Update` , this.props.params.post)
                .then( response =>{
                    console.log(response);
                }).catch( error => {
                    console.log(error);
                })
            break;

            case "create" :
                axios.post(`${document.location.origin}/Admin/Post/Create` , this.props.params.post)
                .then( response =>{
                    console.log(response);
                }).catch( error => {
                    console.log(error);
                })
            break;
        }
    }
    render()
    {

        return(

            <div className="ui-reveal-container">
                <div className="ui-post-editor" ref={this.setWrapperRef}>
                    <div className="wrapper">
                        <Row>
                            <Col md={6}>
                                <TextInput title="Заголовок" content={this.props.params.post.title} onChange={this.onChangeHandler} name="post-title"/>
                                <TextInput title="Подзаголовок" content={this.props.params.post.subtitle} onChange={this.onChangeHandler} name="post-subtitle" />
                            </Col>

                            <Col md={12}>
                                <Editor onChange={this.onChangeHandler} name = "post-content"content={this.props.params.post.subtitle} />
                            </Col>
                            <Col md={12}>
                                <SubmitButton onClick={this.SubmitEventHandler}>
                                        {this.props.params.mode == 'edit' ? 'Сохранить' : 'Создать'}'}
                                </SubmitButton>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
/**UI for Form ELEMENTS */

//FIXME: Button for default class extend

class SubmitButton extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <button className="btn btn-submit primary" onClick={this.props.onClick} >{this.props.children}</button>
        )
    }
}
class TextInput extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <label className={"ui-input text " + this.props.class}>
                {this.props.title ? <span>{this.props.title}</span> : ''}
                <input id={this.props.id} name={this.props.name}  onChange={this.props.onChange} type="text" placeholder={this.props.placeholder} defaultValue={this.props.content} />
            </label>
        )
    }
}


class DropdownSelection extends Component
{
    constructor(props)
    {
        super(props);
        this.options = this.props.options.map( (option) =>
        <option>{option}</option>);
    }


    render()
    {
        return (
            <label>
                {this.props.title ? <span>{this.props.title}</span> : null}
                <select>
                    {this.props.placeholder ? <option disabled selected>{this.props.placeholder}</option> : null}
                    {this.options}
                </select>
            </label>
        );
    }
}

class DateInput extends Component
{
    //TODO:Optimize with DropdownSelection
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <label>
                {this.props.title ? <span>{this.props.title}</span> : null}
                <select>
                    <option disabled selected>DD</option>
                </select>
                <select>
                    <option disabled selected>MM</option>
                </select>
                <select>
                    <option disabled selected>YYYY</option>
                </select>
            </label>
        );
    }
}

class Panel extends Component
{
    constructor(props)
    {
        super(props);
        //FIXME: use some REACT function to solve this
        this.children = this.props.children.map( (element , i) => <li key={i}>{element}</li>);
    }

    render()
    {
        return(
        <ul className="panel">
            <li className="section-title">
                <h1 className="bold">{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </li>
            <li className="search-container">
            </li>
            <li className="filter usable"></li>
            {this.children}
        </ul>
        );
    }
}

class UserProfileUI extends Component
{
    //TODO: Cast DropdownUI to separate class for extensions
    constructor(props)
    {
        super(props);

        this.state = {active : false};
    }
    OnClickHandler(e)
    {
        this.setState({active : !this.state.active});
    }
    render()
    {
        return (
            <li className="user-profile" onClick = {this.OnClickHandler.bind(this)}>
                <div className="user-photo">
                    <img src="source/images/male-user-profile.jpg" alt=""/>
                </div>
                <span className={"bold ui-dropdown usable " + (this.state.active ? "active" : '') }>Hugh Jackman
                    <ul className="ui-dropdown-menu" >
                        <li className="ui-list-item"> <i className="icon-home"></i>
                        <div className="ui-list-message">home</div>
                        </li>
                        <li className="ui-list-item"> <i className="icon-chart"></i>
                        <div className="ui-list-message">config</div>
                        </li>
                    </ul>
                </span>
            </li>
        )
    }
}


class Notification extends Component
{
    render()
    {
        return (
            <li key="ui-list-item" className="ui-list-item">
                <div key="ui-list-image" className="ui-list-image">  <img src={this.props.user_image} alt={this.props.user_name}/></div>
                <div key="ui-list-message" className="ui-list-message"> <span><span className="bold"><a href={this.props.user_url}></a>{this.props.user_name}</span>{this.props.action}</span><span>{this.props.timespan}</span></div>
            </li>
        );
    }
}


class NotificationsUI extends Component
{
    constructor(props)
    {
        super(props);


        this.state = { active : false }

        this.notifications = this.props.notifications.map((notification , i)=>
            <Notification key ={i}
                user_name      =   {notification.user_name}
                user_image     =   {notification.image}
                user_url       =   {notification.url}
                timespan       =   {notification.timespan}
                action         =   {notification.action}
            />
        );


    }

    OnClickHandler(e)
    {
        this.setState({active : !this.state.active});
    }

    render()
    {
        return (
            <li className= {"notifications ui-dropdown usable " + (this.state.active ? "active" : '') } onClick={this.OnClickHandler.bind(this)}><i className="icon-notification"></i>
                <ul className="ui-dropdown-list">
                    {this.notifications}
                </ul>
            </li>
        )
    }
}



class UIAddRecordButton extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <button onClick={this.props.onClick} className="btn danger-gradient rounded bold"><i className="icon-plus"></i>{this.props.content}</button>
        )
    }
}

class UIImportButton extends Component
{
    constructor(props)
    {
        super(props)
    }


    render()
    {
        return(
            <button className="btn rounded" onClick={this.props.onClick}><i className="icon-download"></i>{this.props.content}</button>
        )
    }
}

class UIFilterButton extends Component
{
    render()
    {
        //FIXME:Normal Button for this
        return <i className="icon-filter" onClick={this.props.onClick}></i>
    }
}

class UISearchInput extends Component
{
    render()
    {
        return(
            <label className="submit-input-container">
                <input className="rounded input" type="text" role="search"/>
                <button className="btn rounded primary-gradient submit"><i className="icon-plus"></i></button>
            </label>
        );
    }
}



//NEW UI/UX






