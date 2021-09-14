import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
            this.getData()
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,  
        {
            method: "DELETE",
            // headers:{
            //     'Content-type':'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
            this.getData()
           alert("Restaurant has been Deleted")
        })
    })
    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {

                                    this.state.list.map((item, i) =>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.address}</td>
                                            <td><Link to = {"/update/"+item.id} ><FontAwesomeIcon icon= {faEdit} color ="orange" /></Link></td>
                                            <td><FontAwesomeIcon icon= {faTrash} color ="orange" onClick = {()=>this.delete(item.id)}/></td>
                                        </tr>
                                        )
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        )
    }
}

export default RestaurantList