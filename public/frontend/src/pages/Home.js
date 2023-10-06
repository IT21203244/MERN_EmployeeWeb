import bimg1 from '../images/addp.png'
import bimg2 from '../images/listp.png'
import bimg3 from '../images/addle.png'
import bimg4 from '../images/iledger.png'
import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const Home = () => {

    return (
        <div className="home">

            <div className='headbox'>
                <h3>Inventory Management</h3>
            </div>

            <div className='buttonBox'>
                <button class="bu1"><a href="/ItemAdd">
                        <img src={bimg1} alt="addp"/>
                        <h4>Add Product</h4>
                    </a></button>

                <button class="bu2"><a href="/ItemList">
                        <img src={bimg2} alt="listp"/>
                        <h4>List of Products</h4>
                    </a></button>

                <button class="bu3"><a href="/PledAdd">
                        <img src={bimg3} alt="addTransactions"/>
                        <h4>Add Ledger</h4>
                        <h5>(Transactions)</h5>
                    </a></button>

                <button class="bu4"><a href="/LedgerList">
                        <img src={bimg4} alt="ledgerp"/>
                        <h4>Inventory Ledger</h4>
                    </a></button>
                
            </div>

            <div class="profile">
                <div class="avatar">
                    <img src={profile} alt="avatar"/>
                </div>
                <div class="dropdown">
                    <button class="dropbtn"><img src={droparrow} alt="darrow"/></button>
                    <div class="dropdown-content">
                        <a href="/">Employee Name</a>
                        <a href="/Inventory Login">Logout</a>
                    </div>
                </div>
            </div>

            <button className="just" style={{position:"absolute", top:600}}>A</button>

        </div>
    )
}

export default Home