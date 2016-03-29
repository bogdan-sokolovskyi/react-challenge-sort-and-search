import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
	setCurrentUser(id) {
		this.props.setActiveUser(id)
	}
	render() {
	
		let rows = this.props.jsonData;

        return (

			<table className="user-list table table-striped">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
					</tr>
				</thead>

				<tbody>
					{rows.map((item) => {
						return (<UserData searchValue={this.props.searchValue} key={item.id} user={item} setCurrentUser={this.setCurrentUser.bind(this)} />)
					})}
				</tbody>
			</table>
        );
	}
}
