import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { price,quantity } = this.props.summary
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 12' color='green' icon='bank'
                            value={`R$ ${price}`} text='Total de Quantidades' />
                        <ValueBox cols='12 12' color='red' icon='credit-card'
                            value={`R$ ${quantity}`} text='Preço Total' />
                        <ValueBox cols='12 12' color='blue' icon='money'
                            value={`R$ ${price*quantity}`} text='Valor Consolidado' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)