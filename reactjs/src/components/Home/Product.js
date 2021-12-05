import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProductsCategory} from '../../actions/Allaction';
import { connect, Provider } from 'react-redux';



class Product extends Component {
    render() {
        return (
        
                <Container className="product">
                    <div className="product-title">
                        {this.props.title}
                    </div>                     
                    <div className="product-image">
                        <img src={this.props.image} />
                    </div>
                    <p><Link to="./resultpage" onClick={()=>this.props.fetchProductsCategory(this.props.Category)} >shop now</Link></p>

                </Container>
        
        )
    }
}
export default connect(null, {fetchProductsCategory })(Product);
// import './Home1.css'
// function Product({title,image,link,searchProduct})  {
//         function display(e){
//             {searchProduct(e)}
//         }
//         return (
//                 <Container className="product">
//                     <div className="product-title">
//                         {title}
//                     </div>
//                     <div className="product-image">
//                         <img src ={image}/>
//                     </div>
//                     <p><Link to={link} onClick={()=>display(title)}>shop now</Link></p>

//                 </Container>
//         )
// }
