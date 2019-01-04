class Row extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props.class == undefined ? '' : '';
    }


    render()
    {
        return(
            <div className={"row " + (this.props.class ? this.props.class : '')}>{this.props.children}</div>
        );
    }
}



class Col extends React.Component
{
    constructor(props)
    {
        super(props);

        this.xs = this.props.xs ? 'col-xs-' + this.props.xs : '';
        this.sm = this.props.sm ? 'col-sm-' + this.props.sm : '';
        this.md = this.props.md ? 'col-md-' + this.props.md : '';
        this.lg = this.props.lg ? 'col-lg-' + this.props.lg : '';
        this.class = this.props.class ? this.props.class  : '';
    }


    render()
    {
        return(
            <div className={this.xs + this.sm + this.md + this.lg + this.class }>
                {this.props.children}
            </div>
        );
    }
}
