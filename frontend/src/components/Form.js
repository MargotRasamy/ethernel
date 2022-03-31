import { Component } from "react";
import ButtonSimple from "./ButtonSimple";
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';


const Form = () => {

  const { handleChange, formData, sendTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, gif, msg } = formData;
    e.preventDefault()

    if(!addressTo || !amount || !gif || !msg) {
      alert('You forgot to fill one or many fields');
      return
    }
    
    sendTransaction()
  }

  return (
    <form className="form">
      <div className="input">
        <input type="text"
          name="addressTo"
          onChange={(e) => handleChange(e)}
          value={formData.addressTo}
          placeholder="Send to (address)"
          />  
      </div>
      <div className="input">
        <input type="number"
          name="amount"
          onChange={(e, name) => handleChange(e, name)}
          value={formData.amount}
          placeholder="Amount (ETH)"
          />  
      </div>
      <div className="input">
        <input type="text"
          name="gif"
          onChange={(e, name) => handleChange(e, name)}
          value={formData.gif}
          placeholder="Enter a keyword (gif)"
          />  
      </div>
      <div className="input">
        <input type="text"
          name="msg"
          value={formData.msg}
          onChange={(e, name) => handleChange(e, name)}
          placeholder="Enter a message"
          />  
      </div>
      <ButtonSimple type="button" onClickEvent={(e) => {handleSubmit(e)}} text="Send now" color="color" size="sm" />
      
  </form>
  )

}


// class Form extends Component {
//     state = { 
//         addressTo: '',
//         amount: '',
//         gif: '',
//         msg: ''
//     };

//     handleChange = (e) => {
//         this.setState({[e.target.name]: e.target.value});
//     }

//     handleSubmit = () => {
        
//     }

//     render () {
//         return (
//             <form className="form">
//                 <div className="input">
//                   <input type="text"
//                     name="addressTo"
//                     onChange={(e) => this.handleChange(e)}
//                     value={this.state.addressTo}
//                     placeholder="Send to (address)"
//                     />  
//                 </div>
//                 <div className="input">
//                   <input type="text"
//                     name="amount"
//                     onChange={(e) => this.handleChange(e)}
//                     value={this.state.amount}
//                     placeholder="Amount (ETH)"
//                     />  
//                 </div>
//                 <div className="input">
//                   <input type="text"
//                     name="gif"
//                     onChange={(e) => this.handleChange(e)}
//                     value={this.state.gif}
//                     placeholder="Enter a keyword (gif)"
//                     />  
//                 </div>
//                 <div className="input">
//                   <input type="text"
//                     name="msg"
//                     value={this.state.msg}
//                     onChange={(e) => this.handleChange(e)}
//                     placeholder="Enter a message"
//                     />  
//                 </div>
//                 <ButtonSimple type="submit" text="Send now" color="color" size="sm" />
               
//             </form>
//         )
//     }
// }

export default Form