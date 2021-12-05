import React ,{Component} from 'react';
import './Result.css';
import { Container, Card, Button } from 'react-bootstrap';
import Search_item from './search_item';
import { connect } from 'react-redux'
class ResultPage extends Component {
    render(){
        const {products} = this.props;
        let content = '';
        content = products !="0"?products.map((product,index)=>(
            <Search_item key = {product.id} product = {product}/>
        )):<p>NO RESULT FOUND</p>;
    return (
        <div>
            <Container className="result-box">
                <Container className="filter-box">

                </Container>
                <Container className="result-container">
                    {content}       
                </Container>
            </Container>
        </div>
    )
}
}

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(mapStateToProps)(ResultPage);
// export default Result