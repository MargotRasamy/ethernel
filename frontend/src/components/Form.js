import { Component } from "react";
import ButtonSimple from "./ButtonSimple";

class Form extends Component {
    state = { 
        addressTo: '',
        amount: '',
        gif: '',
        msg: ''
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = () => {
        
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render () {
        return (
            <form className="form">
                <div className="input">
                  <input type="text"
                    name="addressTo"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.addressTo}
                    placeholder="Send to (address)"
                    />  
                </div>
                <div className="input">
                  <input type="text"
                    name="amount"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.amount}
                    placeholder="Amount (ETH)"
                    />  
                </div>
                <div className="input">
                  <input type="text"
                    name="gif"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.gif}
                    placeholder="Enter a keyword (gif)"
                    />  
                </div>
                <div className="input">
                  <input type="text"
                    name="msg"
                    value={this.state.msg}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Enter a message"
                    />  
                </div>
                <ButtonSimple type="submit" text="Send now" color="color" size="sm" />
               
            </form>
        )
    }
}

export default Form