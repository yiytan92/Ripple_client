import React, { Component } from 'react'
import axios from 'axios'
import {connect} from  'react-redux'
import PropTypes from 'prop-types'


export default class RoomlistEntry extends Component {
    constructor(props){
        super(props)
        this.handleRoomClick = this.handleRoomClick.bind(this);
    }

handleRoomClick(e){
    console.log('you clicked room ', this.props.room)
    this.props.onClick(this.props.room);
}


render() {
    // console.log('this is that props shit in entry ' , this.props)
    var context = this;
    return (
        <li onClick={context.handleRoomClick}> {context.props.id} : {context.props.room.roomname}, Owner: {context.props.room.resident} </li>
    )
}


}

RoomlistEntry.propTypes = {
    room: PropTypes.shape({
     roomname: PropTypes.string.isRequired,
     resident: PropTypes.string.isRequired
    })  
  };
  

/*
room.dataValues ===   { roomID: 2,
  roomname: 'Lobby',
  password: null,
  resident: 'jay',
  createdAt: 2017-12-11T18:44:16.000Z,
  updatedAt: 2017-12-11T18:44:16.000Z }
*/