import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import store from '../store/store';
export const requestsColDefs = [
{
    dataField: 'id',
    text: 'ID'
},
{
    dataField: 'title',
    text: 'title'
},
{
    dataField: 'status',
    text: 'Status',
},
{
    dataField: 'quantity',
    text: 'quantity',
},
{
    dataField: 'description',
    text: 'description',
},
{
    dataField: 'item',
    text: 'item',
},
{
    dataField: 'category',
    text: 'category',
},

];
export const paginationoptions = {
    sizePerPage: 5,
    prePageText: 'Back',
    nextPageText: 'Next',
};
