import { connect }  from "react-redux";
import orderreducer from "./Reducers/orderReducer";
import Header from "./Components/Header";

const Orders = ({listofOrders}) => {
    return(
        <>
        <Header />
        <center>
            {listofOrders.length > 0 ?
            <div className="container">
                    <div className="row">
                        {listofOrders.map((order,index) => 
                            <div className="col-md-4" style={{padding:"5px"}} key={order.id}>
                                <div className="card" style={{width:"18rem",padding:"3px"}}>
                                <img className="card-img-top" alt="Food Items" src={order.url}/>
                                <div className="card-body">
                                    <h5 className="card-title">{order.name}</h5>
                                    <h5 className="card-text">Amount: {order.prize}</h5>
                                    <h5 className="card-text">Table number: {order.table_number}</h5>
                                </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div> 
                : <div className="spinner-border text-primary"></div>
                }
        </center>
        </>
    )
}
const mapStateToProps = state => ({
    listofOrders : state.orderreducer
})
export default connect(mapStateToProps)(Orders)