
import React from 'react';
const Items = (props) => {
    const {Items , deleteItem}=props;
    let length = Items.length;
    const listItems= length ? (
    Items.map (Items =>{
        return(
            <div key={Items.id}>
                <span className="name">{Items.name}</span>
                <span className="age">{Items.age}</span>
                <span className="action icon" onClick={ () => deleteItem(Items.id)}>&times;</span>
            </div>
        )

    })
    ) : (
        <p>there is no item to shwo</p>
    )
    return (
        <div className='listitems'>
            <div>
            <span className="name">Name</span>
            <span className="age">Age</span>
            <span className="action title">Delete</span>
            </div>
            
            {listItems}
        </div>
    )
   
}
export default Items;