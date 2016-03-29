import React, { Component } from 'react';

export default class ToolBar extends Component {
	constructor(props) {
		super(props);
	}

	sortBy(name) {
		this.props.sortBy(name)
	}

	render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default" onClick={this.sortBy.bind(this, 'name')}>
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>
                        <button className="btn btn-default" onClick={this.sortBy.bind(this, 'age')}>
                            <i className="icon fa fa-sort-numeric-asc"></i>
                            <span> Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
	}
}
