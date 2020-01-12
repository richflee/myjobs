import * as React from 'react';

export class Job extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            editing: false
        };

        this.newClientName = React.createRef();
        this.newDateInput = React.createRef();
    }

    newClientName: any;
    newDateInput: any;

    edit() {
        this.setState({editing: true});
    };

    save() {
        this.props.onChange(this.newClientName.current.value, this.newDateInput.current.value, this.props.id);
        this.setState({editing: false});
    };

    remove() {
        this.props.onRemove(this.props.id)
    };

    renderForm() {
        return (
            <div className="row job-form-row">
                <span className="small-4 medium-4 large-4 columns">
                    <input type="text" ref={this.newClientName} defaultValue={this.props.client} />
                </span>
                <span className="small-4 medium-4 large-4 columns">
                    <input type="text" ref={this.newDateInput} defaultValue={this.props.date} />
                </span>
                <span className="small-2 medium-2 large-2 columns"><button onClick={ () => this.save() } className="success hollow button">Save</button></span>
            </div>
        );
    };

    renderDisplay() {
        return (
            <div className="row job-row">
                <span className="small-2 medium-2 large-2 columns text-wrapper">{this.props.jobNumber}</span>
                <span className="small-4 medium-4 large-4 columns text-wrapper">{this.props.client}</span>
                <span className="small-4 medium-4 large-4 columns text-wrapper">{this.props.date}</span>
                <span className="small-2 medium-2 large-2 columns">
                    <button onClick={ () => this.edit() } className="hollow button edit-job-button" type="button">edit</button>
                    <button onClick={ () => this.remove() } className="alert  hollow button delete-job-button" type="button">delete</button>
                </span>
            </div>
        )
    };

    render() {
        return (this.state.editing) ? this.renderForm() : this.renderDisplay()
    }
}