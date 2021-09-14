import React, { Component } from 'react'
import "../App.css"
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
export default class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={
            searchData:null,
            noData:false,
            lastkey:null
        }
    }
    search(key){
        console.warn(key)
        this.setState({lastkey:key})
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp);
                if(resp.length>0){
                    this.setState({searchData:resp,noData:false})
                }
                else{
                    this.setState({noData:true,searchData:null})
                }
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
            // body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
            this.search(this.state.lastkey)
           alert("Restaurant has been Deleted")
        })
    })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Search</h1>
                <input tyoe = "text" onChange = {(event)=>this.search(event.target.value)}/>
                <div>
                    {
                        this.state.searchData?
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

                                    this.state.searchData.map((item, i) =>
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
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>
                        :null
                    }
                </div>
            </div>
        )
    }
}
