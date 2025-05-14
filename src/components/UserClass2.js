import React from "react";
import ReactDOM from "react-dom/client";

class UserClass2 extends React.Component {
    constructor(props) {
        super(props);
        console.log("user class 2 constructor called" + this.props.name);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log("user class 2 componentDidMount called" + this.props.name);
    }
    componentWillUnmount() {
        // setTimeout(() => {
        console.log("user class 2 componentWillUnmount called" + this.props.name);
        // }, 1000);
    }
    render() {
        const { name, contact, location } = this.props;
        const { count } = this.state;
        console.log("user class 2 render called" + this.props.name);
        return (<div className="about-block">
            <button onClick={() => {
                this.setState({
                    count: count + 1
                })
            }}>COUNT{count}</button>
            <h3>{name}</h3>
            <h3>{contact}</h3>
            <h3>{location}</h3>
        </div>);
    }
}
export default UserClass2;