import Card from '../../components/card/cards.jsx'
import AddIcon from '../../assets/Add-Icon.png'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import './CategoryPage.css'
// import './sidebar.css'

const categories = () => {
  return (
    <>
        
    <Sidebar/>
  
    <div className="category-cards">
    <div className='add-button-icon' >
        <img src={AddIcon} />
      </div>
        <Card>
        </Card>
        
        <Card>
        </Card>
        
      </div>
    </>
  )
}

export default categories
