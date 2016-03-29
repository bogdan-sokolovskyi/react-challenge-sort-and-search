import React, { Component } from 'react';


export default class ActiveUser extends Component {

	render() {
		const currentUser = this.props.currentUser;

		if(!currentUser.name)
			return (<h3>Nothing found :(</h3>);
		else
	        return (
				<div className="thumbnail">
	                <img src={`images/${currentUser.image}.svg`} />
	                <div className="thumbnail-caption">
	                    <h3 dangerouslySetInnerHTML={{__html: currentUser.name}}></h3>
	                    <table className="user-info table table-responsive">
	                        <tbody>
		                        <tr>
		                            <td>Age:</td>
		                            <td>{currentUser.age}</td>
		                        </tr>
		                        <tr>
		                            <td>Favorite animal:</td>
		                            <td>{currentUser.image}</td>
		                        </tr>
		                        <tr>
		                            <td>Phone:</td>
		                            <td>
										<span>8</span> {currentUser.phone}
		                            </td>
		                        </tr>
	                        </tbody>
	                    </table>
	                    <p>
	                        <b>Favorite phrase: </b>
	                        <span>{currentUser.phrase}</span>
	                    </p>
	                </div>
	            </div>
	        );
	}
}
