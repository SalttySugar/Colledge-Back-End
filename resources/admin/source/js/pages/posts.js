import  React ,{Component } from 'react'
import  {PostsTable} from '../components/table';
export default class Posts extends Component
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
            <div className="wrapper">
                <PostsTable>
                <th className="bold">
                    <label className="ui-input primary rounded row-selector">
                        <input type="checkbox"/><span></span>
                    </label><span>id</span>
                    </th>
                    <th className="bold"> Заголовок</th>
                    <th className="bold"> Дата Добавления</th>
                    <th className="bold"> Дата Обновления</th>
                    <th className="bold"> Автор</th>
                    <th className="bold"> Статус</th>
                </PostsTable>
            </div>
        )
    }
}


export {Posts};
