import React , {Component} from 'react';
export default class Pages extends Component
{
    constructor(props)
    {
        super(props)
    }


    render()
    {
        return(
            <div className="wrapper">
                {this.state.editor.active ? <PostEditor closeHandler={this.closeHandler} params={this.state.editor}/> : null}
                <Panel>
                    <UISearchInput />
                    <UIImportButton content= "Импортировать"/>
                    <UIAddRecordButton onClick={this.createButtonHandler} content="Добавить Запись"/>
                </Panel>
            </div>
        );
    }
}
