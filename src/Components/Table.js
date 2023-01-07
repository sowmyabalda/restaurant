import { useState } from "react";
import { connect } from "react-redux";
import { settablenum } from "../Actions/Index";

const Table = ({table_number,settablenum}) => {
    const tableNumbers = [1,2,3,4,5,6,7,8,9,10];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const [tableNumClicked,setnum] = useState(null);

    return(
        <center className="mt-2">
            <h6>Please select a Table number before placing an order</h6>
            <div>
                {tableNumbers.map((num,index) => (
                <div style={{display:"inline"}} key={index}>
                    <button className={table_number === num ? activeBtn : inActiveBtn} onClick={() => settablenum(num)}>{num}</button>
                </div>)
                )}
            </div>
        </center>
    )
}
const mapStateToProps = state => ({
    table_number: state.tablereducer.table_number
})
export default connect(mapStateToProps,{settablenum})(Table)