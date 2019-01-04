import React ,{Component} from 'react';
import {Row , Col} from '../components/grid';
import {Panel , UISearchInput , UIImportButton, ContextMenu , ContextMenuItem } from '../components/ui';
class MediaItem extends Component
{
    constructor(props)
    {
        super(props)
        this.RightClickHandler = this.RightClickHandler.bind(this);
    }

    RightClickHandler(e)
    {
        e.preventDefault();
        this.props.onContextMenu(this.props.media , {
            x : e.clientX,
            y : e.clientY,
        });
    }
    render()
    {
        return(
            <div onContextMenu={this.RightClickHandler} className="media-item usable">
                <div className="media-item-icon">
                    <img src={this.props.media.url.toString()}/>
                </div>
            </div>
        )
    }
}

export default class Media extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data : null,
            menu : {
                active   : false,
                position : null,
                media    : null,
            }
        }

        this.fileUplaodHandler = this.fileUplaodHandler.bind(this);
        this.contextMenu = this.contextMenu.bind(this);
    }

    closeMenu()
    {
        this.setState({
            menu : {
                active   : false,
                position : null,
                media    : null,
            }
        })
    }
    contextMenu(media , position)
    {
        this.setState({
            menu : {
                active   : true,
                position : position,
                media    : media,
            }
        });


    }

    DeleteMedia()
    {
        axios.get(`${document.location.origin}/Admin/Media/${this.state.menu.media.id}/delete`).then(response => {
            console.log(response);
        }).catch(error =>{
            console.log(error);
            return;
        });

        this.handleMedia();
    }

    CopyLink(e)
    {
        var link =  this.state.menu.media.url;
        var input = document.createElement('INPUT');
        input.type="text";
        input.value=link;
        input.visible = false;
        document.body.append(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

    }

    handleMedia()
    {
        axios.get(`${document.location.origin}/Admin/Media`)
        .then( response => {
            var data = [];
            response.data.forEach( (media,i) =>{
                data.push(
                    <Col key={i.toString()} md={2}>
                        <MediaItem onContextMenu={this.contextMenu} media={media}/>
                    </Col>
                );
            } );

            this.setState({
                data: data,
            })
        }).catch( error => {
            console.log(error);
        });

        this.CopyLink = this.CopyLink.bind(this);
        this.DeleteMedia = this.DeleteMedia.bind(this);
        this.closeMenu =this.closeMenu.bind(this);
    }
    componentDidMount() {
        this.handleMedia();
    }


    fileUplaodHandler(event)
    {
        var data = new FormData();
        var settings = { headers: { 'content-type': 'multipart/form-data' } }
        data.append('image' , event.target.files[0]);

        axios.post(`${document.location.origin}/Admin/Media/Upload` , data , settings )
        .then(response => {
            //TODO:Think about returning all data in response.
            this.handleMedia();
        }).catch(error => {
            console.log(error);
        });
    }


    render()
    {
        return (
        <div className="wrapper">
            <Panel>
                <UISearchInput />
                <UIImportButton content= "Импортировать"/>
                <input name="image" type="file"  onChange={this.fileUplaodHandler}/>
            </Panel>
            {
                this.state.menu.active ?

                <ContextMenu  closeHandler={this.closeMenu} style={{left : this.state.menu.position.x , top : this.state.menu.position.y }}>
                    <ContextMenuItem onClick={this.DeleteMedia}>Удалить</ContextMenuItem>
                    <ContextMenuItem onClick={this.CopyLink}>Копировать ссылку</ContextMenuItem>
                </ContextMenu>

                 : ''
            }
            <div className = "media-gallery">
                <Row>
                    {this.state.data}
                </Row>
            </div>
        </div>
        );
    }
}
