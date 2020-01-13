
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getListCategory,showUpdate, showDelete } from './productsActions'

class ProductListCategory extends Component {

    componentWillMount() {
        this.props.getListCategory()
    }
    
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.id}</td>
                <td>{bc.name}</td>
                <td>{bc.quantity}</td>
                <td>{bc.price}</td>
                <td>{bc.category}</td>
            </tr>
        ))
    }

    render() {
        
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.products.listCategory})
const mapDispatchToProps = dispatch => bindActionCreators({getListCategory}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductListCategory)