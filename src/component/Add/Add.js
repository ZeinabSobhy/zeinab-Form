
import React , {Component} from 'react';

class Add extends Component{
    state = {
        name : '',
        age : ''
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value===''){
            return false
        }else{
            this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''
        })
        }
       
    }
    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit} >
                             <input type="text" placeholder = 'Input Text...' id= 'name' onChange={this.handlechange} value={this.state.name}/>
                            <input type="number" placeholder = 'DropDown...' id= 'age' onChange={this.handlechange}value={this.state.age}/>
                            <input tyipe= "Submit"value="Add Button"/>
            
                    </form> 
            </div>
        )
    }
}
export default Add;