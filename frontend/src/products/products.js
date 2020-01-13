import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init} from './productsActions'

import ListCategory from './productsListCategory'
import ListID from './productsListID'

class Products extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div> 
                <ContentHeader title='Produtos Cadastrados' />
                <Content> 
                    <Tabs> 
                        <TabsHeader> 
                            <TabHeader label='Produtos Categoria' icon='bars' target='tabListCategory' />
                            <TabHeader label='Produtos Id' icon='bars' target='tabListID' />
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabListCategory'>
                                <ListCategory/>
                            </TabContent>
                            <TabContent id='tabListID'>
                                <ListID />
                            </TabContent>
                        </TabsContent> 
                    </Tabs> 
                </Content> 
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(null, mapDispatchToProps)(Products)