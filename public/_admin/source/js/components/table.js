
import axios from 'axios';


class TableRow extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (<tr>{this.props.children}</tr>)
    }
}
class Table extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data   : null,
            editor : {
                active : false,
                mode   : null,
                post   : null,
            } ,
            menu : {
                active   : false,
                position : null,
                post     : null,
            },
        }

        this.Editor = null;
        this.Pagination = null;
        this.closeHandler = this.closeHandler.bind(this);
        this.rowClicked = this.rowClicked.bind(this);
        this.createDataHandler = this.createDataHandler.bind(this);
        this.rowRightClicked = this.rowRightClicked.bind(this);
        this.DeletePost = this.DeletePost.bind(this);
        this.CopyLink = this.CopyLink.bind(this);
        this.ViewOnWebsite = this.ViewOnWebsite.bind(this);

    }

    rowClicked(post)
    {
        this.setState({
            editor : {
                active : true,
                mode   : 'edit',
                post   : post,
            }
        });

    }

    rowRightClicked(post , position)
    {
        console.log('click');
        this.setState({
            menu : {
                active   : true,
                position : position,
                post     : post,
            }
        })
    }
    closeHandler()
    {
        this.setState({
            editor : {
                active : false,
                mode   : null,
                post   : null,
            },

            menu : {
                active   : false,
                position : null,
                post     : null,
            },
        });

        console.log('close');

    }


    createDataHandler()
    {
        this.setState({
            editor : {
                active : true,
                mode   : 'create',
                post   : null,
            },

            page : {
                current     : null,
                total_data  : null,
                from_data   : null,
                to_data     : null,
                total_pages : null,
            },

        });
    }



    DeletePost()
    {
        axios.get(`${document.location.origin}/Admin/Post/${this.state.menu.post.id}/Delete`).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
            return;
        });


        //TODO:Make this cleaner.
        //TODO: Still need to ask data from the server. Naaaa

        var index = this.state.data.findIndex(obj => obj.props.post.id == this.state.menu.post.id);
        var dummy = this.state.data.slice();

        dummy.splice(index , 1);
        this.setState({
            data: dummy,
            menu: {
                active   : false,
                post     : null,
                position : null,
            }
        });

    }
    CopyLink()
    {

    }

    ViewOnWebsite()
    {

    }
    render()
    {
        //TODO: Migrate @Panel@ to field for extension

        return (
        <div className="table-container">
            <Panel>
                <UISearchInput />
                <UIImportButton content= "Импортировать"/>
                <UIAddRecordButton onClick={this.createDataHandler} content="Добавить Запись"/>
            </Panel>

            { this.state.menu.active ? <ContextMenu style={ {left: this.state.menu.position.X , top: this.state.menu.position.Y } } closeHandler={this.closeHandler} >
                <ContextMenuItem onClick={this.DeletePost}>Удалить</ContextMenuItem>
                <ContextMenuItem onClick={this.CopyLink}>Копировать Cылку</ContextMenuItem>
                <ContextMenuItem onClick={this.ViewOnWebsite}>Просмотреть</ContextMenuItem>
            </ContextMenu> : ''}
            {this.state.editor.active ? this.Editor : ''}
          <table className="data-table">
                <tbody>
                    <tr className="table-header">
                        {this.props.children}
                    </tr>
                    {this.state.data}
                </tbody>
            </table>
                {this.Pagination}
        </div>
        )
    }

}


class PostsTableRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            post : this.props.post,
        }

        this.rowClickHandler = this.rowClickHandler.bind(this);
        this.rowRightClickHandler = this.rowRightClickHandler.bind(this);
    }

    rowClickHandler(event)
    {
        event.preventDefault();

        if(event.target.nodeName != "TD")
            return;
        this.props.onClick(this.props.post);
    }


    rowRightClickHandler(event)
    {
        event.preventDefault();

        this.props.onContextMenu(this.props.post , {
            X : event.clientX,
            Y : event.clientY,
        });

    }
    render()
    {
        return(
            <tr className="usable" onClick = {this.rowClickHandler} onContextMenu={this.rowRightClickHandler}>
                <td>
                  <label className="ui-input primary rounded row-selector">
                    <input type="checkbox" name="check"/><span></span>
                  </label><span>{this.state.post.id}</span>
                </td>
                <td>{this.state.post.title}</td>
                <td>{this.state.post.created_at}</td>
                <td>Не обновлялось</td>
                <td><a className="link-primary" href={`${document.location.origin}/Admin/Users/${this.state.post.author}`}>{this.state.post.author}</a></td>
                <td>
                  <span className="danger-badge">Опубликованно</span>
                  <label className="ui-input state">
                    <input defaultValue={this.state.post.published} type="checkbox"/><span className="input"></span>
                  </label>
                </td>
              </tr>
        )
    }
}
class PostsTable extends Table
{
    constructor(props)
    {
        super(props);
        this.Next = this.Next.bind(this);
        this.Previous = this.Previous.bind(this);
    }

    componentDidMount() {
        axios.get(`${document.location.origin}/Admin/Posts?page=1`).then((response)=>{
            let posts = [];
            response.data.data.forEach( (post , i) => {
                posts.push(<PostsTableRow key={i} post = {post} onClick={this.rowClicked} onContextMenu={this.rowRightClicked}/>);
            });

            var nav = [];
            nav.push(<a key="back" onClick={this.Previous} className="pagination-button">Назад</a>)
            for(var i = 1; i <= response.data.last_page; i++)
            {
                nav.push(<a key={i} className="pagination-link">{i}</a>);
            }
            nav.push(<a key="next" onClick={this.Next} className="pagination-button">вперед</a>)

            this.Pagination = (
                <div className="table-meta">
                    <span>
                        {response.data.from} from {response.data.to} total {response.data.total}
                    </span>
                    <span className="data-table-pagination">
                        {nav}
                    </span>
                </div>
            )

            this.setState({data: posts ,
                page : {
                    current     : 1,
                    total       : response.data.total,
                    from_data   : response.data.form,
                    to_data     : response.data.to,
                    total_pages : response.data.last_page,
                    per_page    : response.data.per_page,
                }
            });

        },{
        }).catch(function(error){
            console.log(error);
        })
    }


    Next()
    {
        axios.get(`${document.location.origin}/Admin/Posts?page=${this.state.page.current + 1}`).then((response)=>{
            let posts = [];
            response.data.data.forEach( (post , i) => {
                posts.push(<PostsTableRow key={i} post = {post} onClick={this.rowClicked}/>);
            });
            console.log(response);
            var nav = [];
            nav.push(<a key="back" onClick={this.Previous} className="pagination-button">Назад</a>)
            for(var i = 1; i <= response.data.last_page; i++)
            {
                nav.push(<a key={i} className="pagination-link">{i}</a>);
            }
            nav.push(<a key="next" onClick={this.Next} className="pagination-button">вперед</a>)

            this.Pagination = (
                <div className="table-meta">
                    <span>
                        {response.data.per_page} from {response.data.total}
                    </span>
                    <span className="data-table-pagination">
                        {nav}
                    </span>
                </div>
            )

            this.setState({data: posts ,
                page : {
                    current     : response.data.current_page,
                    total       : response.data.total,
                    from_data   : response.data.form,
                    to_data     : response.data.to,
                    total_pages : response.data.last_page,
                    per_page    : response.data.per_page,
                }
            });

            console.log(this.state);
        },{
        }).catch(function(error){
            console.log(error);
        })
    }

    Previous()
    {

    }


    render()
    {
        this.Editor = <PostEditor closeHandler = {this.closeHandler} params = {this.state.editor}/>
        console.log(this.state);
        return super.render();
    }
}
