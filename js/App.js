import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

const jsonSource = './data.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataListUsers: [],
            dataListUsersView: [],
            currentUser: {},
            searchValue: '',
            order: []
        };

        this.loadJson();
    }

    loadJson() {
        $.get(jsonSource, function(resuts) {
            this.setState({
                dataListUsers: resuts,
                dataListUsersView: resuts,
                currentUser: resuts[0] || {}
            });
        }.bind(this));
    }

    sortBy(column) {
        this.state.order = !this.state.order;
        this.state.dataListUsersView = this.state.dataListUsersView.sort((a, b) => {
            if (column == 'name')
                return (this.state.order ? 1 : -1) * ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
            else if (column == 'age')
                return (this.state.order ? 1 : -1) * (a.age - b.age);
        });
        this.setActiveUser();
    }

    searchFn(value) {
        this.state.dataListUsersView = this.state.dataListUsers.filter((item) => {
            if( -1 !== item.name.toLowerCase().indexOf(value.toLowerCase()) )
            {
				// TODO
				// if(value.length > 0)
				// {
				// 	let name = item.name;
				// 	let pattern = '(' + value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ')';
				// 	item.name = name.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
				// }
                return true;
            }
        });
        this.setState({
            searchValue: value,
            currentUser: this.state.dataListUsersView[0] || {}
        });
    }
    setActiveUser(id) {
        this.setState({
            currentUser: this.state.dataListUsers[id] || this.state.dataListUsersView[0] || {}
        });
    }

    render() {
        return (
            <div className="container-fluid app">
                <SearchBar searchValue={this.state.searchValue} searchByName={this.searchFn.bind(this)} />
                <ToolBar sortBy={this.sortBy.bind(this)} />
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser currentUser={this.state.currentUser}/>
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList jsonData={this.state.dataListUsersView} setActiveUser={this.setActiveUser.bind(this)} searchValue={this.state.searchValue} />
                    </div>
                </div>
            </div>
        );
    }
}
