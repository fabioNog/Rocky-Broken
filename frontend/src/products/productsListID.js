
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getListID,showUpdate, showDelete } from './productsActions'

class ProductListID extends Component {

    componentWillMount() {
        this.props.getListID()
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

const mapStateToProps = state => ({list: state.products.listid})
const mapDispatchToProps = dispatch => bindActionCreators({getListID,showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductListID)