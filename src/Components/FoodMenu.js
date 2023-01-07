import { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { addorder, resetfilter, resettablenum } from "../Actions/Index";
const FoodMenu = ({filter_name,table_number, addorder}) => {
    const [items, setItems] = useState([]);
    const [cloneData, setcloneData] = useState([]);
    useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        .then((res) => res.json())
        .then((data) => {
            setItems(data.items)
            setcloneData(data.items)
        })
    },[])

    useEffect(() => {
        if(filter_name !== "All Products") {
            let specific = cloneData.filter(item => item.category === filter_name);
            setItems(specific)
        } else {
            setItems(cloneData);
        }
    },[filter_name])

    const PerformOrder = async (id,name,prize,url) => {
        if(table_number != null) {
            await addorder(id,name,prize,url,table_number);
            await resettablenum
            await resetfilter
            alert("Order Placed Successfully, Enjoy your food")
        } else {
            alert("Please select a Table number before placing an order")
        }
    }
    return(
        <div>
            {items.length > 0 ?
                <div className="container">
                    <div className="row">
                        {items.map((item,index) => 
                            <div className="col-md-4" style={{padding:"5px"}} key={item.id}>
                                <div className="card" style={{width:"18rem",padding:"3px"}}>
                                <img className="card-img-top" alt="Food Items" src={item.url}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-text">${item.prize}</h5>
                                    <button className="btn btn-primary" onClick={() => PerformOrder(item.id,item.name,item.prize,item.url)}>Order</button>
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div> 
            : <div className="spinner-border text-primary"></div>
        } 
        </div>  
    )
}
const mapStateToProps = state => ({
    filter_name: state.filterreducer.filter_name,
    table_number: state.tablereducer.table_number
})
export default connect(mapStateToProps, {addorder})(FoodMenu)