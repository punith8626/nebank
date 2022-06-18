import React, { useState, useEffect } from 'react'
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { getRequests } from '../../actions/request';

const Requests = () => {
  const dispatch = useDispatch();
  const requestsList = useSelector(state => state.requests.requestsList);
  const categoriesList = useSelector(state => state.categories.categoriesList);
  const itemsList = useSelector(state => state.items.itemsList);
  const [requests, setRequest] = useState(requestsList);
  // debugger
  const handleSelect = (eventKey) => {
    let filteredRequest = requestsList.filter((request) => {
      if (eventKey == 'all') {
        return requestsList;
      } else {
        return request.status == eventKey;
      }

    })
    setRequest(filteredRequest);
  }
  useEffect(() => {
    dispatch(getRequests());
    
    // console.log(store.getState())
    // debugger
    // setRequest(requestsList);
    return () => {
      // second
      // window.location.reload(false);
    }
  }, [dispatch,requestsList])

  return (
    <React.Fragment>
      <Header />
      <main className="my-3">
        <div className="container-fluid">
          <h2>My requests</h2>
          <div className="row">
            <div className="col-12 text-end mb-2">
              <div className="btn-group">
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle variant="red" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="pending" >pending</Dropdown.Item>
                    <Dropdown.Item eventKey="open" >open</Dropdown.Item>
                    <Dropdown.Item eventKey="completed">completed</Dropdown.Item>
                    <Dropdown.Item eventKey="all">all</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3"></Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="requests">
                  <button type="button" className="btn btn-red mx-2">Add new Request</button>
                </Link>

              </div>



            </div>

            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    requests.length > 0 ?
                      requests.map((request, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {index + 1}
                            </td>
                            <td>
                              {request.title}
                            </td>
                            <td>
                              <p>{request.description}</p>

                            </td>
                            <td>{request.quantity}</td>
                            <td>
                              <p>
                                {
                                  categoriesList.filter((category) => {
                                    return category.id == request.category;
                                  })[0]['title']
                                }
                              </p>
                              <p>

                                {
                                  itemsList.filter((item) => {
                                    return item.id == request.item;
                                  })[0]['title']
                                }
                              </p>
                            </td>
                            <td>
                              {request.status}
                            </td>
                            <td>
                              {
                                (request.status != 'completed') ?
                                  (<Link to={`requests/${request.id}`} className="btn btn-primary">Edit</Link>)
                                  : <Link to={`requests/${request.id}`} className="btn btn-primary">view</Link>

                              }



                            </td>
                          </tr>
                        )
                      })

                      : null
                  }



                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </React.Fragment >

  )
}

export default Requests