import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getListCategory() {
    const request = axios.get(`${BASE_URL}/products/category`)
    return {
        type: 'PRODUCTS_CATEGORY_FETCHED',
        payload: request
    }
}

export function getListID() {
    const request = axios.get(`${BASE_URL}/products/id`)
    return {
        type: 'PRODUCTS_ID_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}


function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Tudo Ok', 'Sucesso Na Operação.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
    ]
}


export function init() {
    return [
        showTabs('tabListCategory', 'tabListID'),
        selectTab('tabListCategory','tabListID'),
        getListID(),
        getListCategory(), 
    ]
}