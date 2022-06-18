import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { createnewRequest, updateRequest } from '../../actions/request';

const CreateRequest = () => {
    const categoriesList = useSelector(state => state.categories.categoriesList);
    const requestList = useSelector(state => state.requests.requestsList);
    const itemsList = useSelector(state => state.items.itemsList);
    const [request, setRequest] = useState({ id: "", title: "", status: "", quantity: '', description: "", item: '', category: '', invoice: '' });
    const [items, setItems] = useState(itemsList);
    const location = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location?.id;
    // const currentRequest  = useSelector(state => state.requests.requestsList.find((p) => p.id === id));
    // const currentrequest = useSelector(state => state.requests.requestsList.find((p) => p.id === id));
    useEffect(() => {
        if (id) {
            // debugger
            let requestcurrent = requestList.filter((request) => {
                return request.id == id
            })
            if (requestcurrent.length > 0) {
                setRequest(requestcurrent[0]);
            }

        }

        return () => {

        }
    }, [id, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        // navigate("/dashboard");
        // debugger
        if (id != null) {
            // setRequest({ ...request, id: id, status: 'completed' })
            dispatch(updateRequest(id, request, navigate));

        } else {
            // setRequest({ ...request, status: 'pending' })
            dispatch(createnewRequest(request, navigate));
        }
       
    }

    const handleChange = (e) => {
        setRequest({ ...request, category: e.target.value });
        setItems(itemsList.filter((item) => {
            return item.category == e.target.value;
        }))
    }
    return (
        <React.Fragment>
            <Header />
            <main className="my-3">

                <div className="container-fluid">
                    <h2>{id ? 'Update' : "Create"} request</h2>
                    <div className="row">
                        <div className="col-6">
                            <Form className="my-3" noValidate onSubmit={handleSubmit} >
                                <div className="row mb-3">
                                    <Form.Label className="col-sm-2 col-form-label">Title</Form.Label>
                                    <div className="col-sm-10">
                                        <Form.Control value={request.title} required type="text" className="form-control" id="title" placeholder="title" onChange={(e) => { setRequest({ ...request, title: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <Form.Label className="col-sm-2 col-form-label">Category</Form.Label>
                                    <div className="col-sm-10">
                                        <Form.Select defaultValue={'DEFAULT'} required id="Category" name="firstname" className="form-select" aria-label="Please Select" onChange={handleChange}>
                                            <option value="DEFAULT" key="defaultcategory">Please Select</option>
                                            {
                                                categoriesList.map((category) => {
                                                    if (category.id == request.category) {
                                                        return <option value={category.id} key={category.id} selected="selected">{category.title}</option>
                                                    } else {
                                                        return <option value={category.id} key={category.id}>{category.title}</option>
                                                    }

                                                })
                                            }
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Item</label>
                                    <div className="col-sm-10">
                                        <Form.Select defaultValue={'DEFAULT'} required id="item" className="form-select" aria-label="Please Select" onChange={(e) => { setRequest({ ...request, item: e.target.value }) }}>
                                            <option value="DEFAULT" key="defaultitem">Please Select</option>
                                            {
                                                items.map((item) => {
                                                    if (item.id == request.item) {
                                                        return <option value={item.id} key={item.id} selected="selected">{item.title}</option>
                                                    } else {
                                                        return <option value={item.id} key={item.id}>{item.title}</option>
                                                    }

                                                })
                                            }
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <Form.Label className="col-sm-2 col-form-label">Quantity</Form.Label>
                                    <div className="col-sm-10">
                                        <Form.Control value={request.quantity} required type="number" className="form-control" id="quantity" placeholder="quantity" onChange={(e) => { setRequest({ ...request, quantity: e.target.value }) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <Form.Label className="col-sm-2 col-form-label">Description</Form.Label>
                                    <div className="col-sm-10">
                                        <textarea value={request.description} required className="form-control" id="description" rows="3" onChange={(e) => { setRequest({ ...request, description: e.target.value }) }}>

                                        </textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <Form.Label className="col-sm-2 col-form-label"></Form.Label>
                                    <div className="col-sm-10">
                                        {(request.status != 'completed') ?
                                            <Button type="submit" className="btn btn-red" >Submit</Button>
                                            : <Button type="submit" className="btn btn-danger" disabled>Submit</Button>
                                        }
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>



                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CreateRequest