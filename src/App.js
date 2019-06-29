
import React,{Component} from 'react';
import Items from './component/Items/Items';
import Add from './component/Add/Add';
class App extends Component{
  state = {
        Items:[
          {id:1,name:'ahmad',age:20},
          {id:2,name:'mahmoud',age:21},
          {id:3,name:'Ali',age:22}
        ]

}

deleteItem = (id) =>{
  let Items = this.state.Items;
  let i = Items.findIndex(item => item.id === id)
  Items.splice(i,1)
  this.setState({Items})
}
      addItem = (item)=> {
        item.id = Math.random();
        let Items = this .state.Items;
        Items.push(item);
        this.setState({Items})

      }

render(){
  return(
    <div className ='App container'>
      
      <Items Items={this.state.Items} deleteItem={this.deleteItem} />
      <Add addItem = {this.addItem}/>
    </div>
  );
}
}
export default App;
