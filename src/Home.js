import Header from './Components/Header'
import Table from './Components/Table'
import Filter from './Components/Filter'
import FoodMenu from './Components/FoodMenu'
const Home = () => {
    return(
        <center>
            <div>
            <Header />
            <Table/>
            <Filter />
            <FoodMenu />
            </div>
        </center>
    )
}
export default Home