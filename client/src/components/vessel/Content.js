import React, { Component } from 'react'

import RoomReservation from '../users/RoomReservation'
import CheckIn from '../users/CheckIn'


require("./Content.css")
class Content extends Component {
    constructor() {
        super();
        this.state = {
            type: 0
        }
        this.right = [
            <RoomReservation>客房预订</RoomReservation>,
            <CheckIn >1</CheckIn>,

        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title row" >
                                        <a
                                            className="btn btn-primary btn-ls btn-block active" role="button"
                                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                        >客房管理</a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="list-group _list_" >
                                                <button onClick={() => { this.setState({ type: 0 }) }} className="list-group-item">客房预订</button>
                                                <button onClick={() => { this.setState({ type: 1 }) }} className="list-group-item">客人入住</button>
                                                <button className="list-group-item">更换房间</button>
                                                <button className="list-group-item">客人退房</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title row">
                                        <a className="collapsed btn btn-primary btn-ls btn-block active" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            CollapsibleItem #2
                                         </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div
                                                className="list-group _list_"
                                            >
                                                <a className="list-group-item _list">
                                                    普通用户</a>
                                                <a className="list-group-item">Dapibus ac facilisis in</a>
                                                <a className="list-group-item">Morbi leo risus</a>
                                                <a className="list-group-item">Porta ac consectetur ac</a>
                                                <a className="list-group-item">Vestibulum at eros</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title row">
                                        <a className="collapsed btn btn-primary btn-ls btn-block active" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            CollapsibleItem #3
                                         </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div
                                                className="list-group _list_"
                                            >
                                                <a className="list-group-item _list">
                                                    普通用户</a>
                                                <a className="list-group-item">Dapibus ac facilisis in</a>
                                                <a className="list-group-item">Morbi leo risus</a>
                                                <a className="list-group-item">Porta ac consectetur ac</a>
                                                <a className="list-group-item">Vestibulum at eros</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <ul class="nav nav-sidebar">
                            <li class="active"><a >Overview <span class="sr-only">(current)</span></a></li>
                            <li><a >Reports</a></li>
                            <li><a >Analytics</a></li>
                            <li><a >Export</a></li>
                        </ul>
                        <ul class="nav nav-sidebar">
                            <li><a href="">Nav item</a></li>
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                            <li><a href="">More navigation</a></li>
                        </ul>
                        <ul class="nav nav-sidebar">
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                        </ul> */}
                    </div>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        {
                            this.right[this.state.type]
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;
