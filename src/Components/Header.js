import { Link } from "react-router-dom"
import { connect } from "react-redux"
const Header = ({count}) => {
    return(
        //This is work
       <div style={{border: "2px solid white" /* Inline CSS*/}}>
           <nav className="navbar navbar-light bg-red">
                <a href='/' className="navbar-brand m-2">Food Villa</a>
                <img className="logo" alt="Logo" style={{width:"100px"}} src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-1/311817116_450040750557583_5807353982347650053_n.jpg?stp=cp0_dst-jpg_e15_p480x480_q65&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=vdDm7AcEfNgAX-bUmeE&_nc_ht=scontent-atl3-1.xx&oh=00_AfDclV38VnStg2LHgBz-voU8SthJTn3JBHGHhGVAsuiQsA&oe=63BE5F7A"/>
                <button className="btn btn-primary m-2">
                    <Link to='/Orders'  style={{color:'white', textDecoration:'none'}}>Orders</Link><span className="badge bg-secondary">{count}</span>
                </button>
           </nav>
       </div>
    )
}
const mapStateToProps = state => ({
    count: state.orderreducer.length
})
export default connect(mapStateToProps)(Header)