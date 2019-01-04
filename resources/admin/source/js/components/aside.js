
import React , {Component} from 'react';

export default class Aside extends Component
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


