import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = (event) => {
        this.setState({ usernname: event.target.value });
    };

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: "https://api-nodejs-todolist.herokuapp.com/user/login",
            data: {
                email: 'thaianh1234@gmail.com',
                password: '123123123',
            }
        }).then((res) => {
            console.log(res);   
            console.log(res.data);
        }).catch(err => console.log(err));
    };

    render() {
        return 
    }
}
