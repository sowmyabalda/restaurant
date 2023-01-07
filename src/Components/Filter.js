import { useState } from "react";
import { connect } from "react-redux";
import { setfilter, resetfilter } from "../Actions/Index";

const Filter = ({filter_name,setfilter, resetfilter}) => {
    const products = ["All Products", "Rice Items", "Soft drinks", "Pizza Pizza", "Hot drinks"];
    const[filter,setfilters] = useState("All Products");
    return(
       <div>
           <center>
               <span className="h4 m-2">Filter:</span>
               <select name="filter" onChange={(e) => setfilter(e.target.value)} className="p-1">
                    {products.map((product, index) => 
                    <option key={index} value={product}>{product}</option>
                    )}
                </select>
           </center>
       </div>
    )
}
const mapStateToProps = state => ({
    filter_name: state.filterreducer.filter_name
})
export default connect(mapStateToProps, {setfilter,resetfilter})(Filter)