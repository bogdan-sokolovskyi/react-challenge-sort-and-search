import React, { Component } from 'react';

export default class UserData extends Component {
	clickUser() {
	    this.props.setCurrentUser(this.props.user.id)
	}
	decoreName() {
		let name = this.props.user.name;
		if(this.props.searchValue.length > 0)
		{
			let pattern = '(' + this.props.searchValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ')';
			return name.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
		}
		return name;
	}


    render() {

        return (
			<tr onClick={this.clickUser.bind(this)}>
                <td>
                    <img src={`images/${this.props.user.image}.svg`} className="user-image"/>
                </td>
                <td dangerouslySetInnerHTML={{__html: this.decoreName()}}></td>
                <td>{this.props.user.age}</td>
                <td><span>8</span> {this.props.user.phone}</td>
            </tr>
        )
    }
}
