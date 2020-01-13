import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Produtos' icon='edit'> 
            <MenuItem path='products'
                label='Produtos Cadastrados' icon='usd' />
        </MenuTree>
    </ul>
)