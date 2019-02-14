import React, { Component } from 'react'

//引入组件
import TextGroup from '../../common/TextGroup'
class RoomReservation extends Component {
    constructor() {
        super();
        this.state = {
            display_naem: "none",//状态机
        }
    }

    onclick1() {
        if (this.state.display_naem === "none") {
            this.setState({
                display_naem: "block",
            })
        } else if (this.state.display_naem === "block") {
            this.setState({
                display_naem: "none"
            })
        }
    }
    onclick2() {
        if (this.state.display_naem === "none") {
            this.setState({
                display_naem: "block",
            })
        } else if (this.state.display_naem === "block") {
            this.setState({
                display_naem: "none"
            })
        }
    }
    render() {
        return (
            <div>
                <h2 className="page-header" style={{ marginTop: "50px" }}>客房预订</h2>
                <div className="container-fluid" style={{ marginBottom: "25px" }}>
                    <form className="form-inline" style={{ whiteSpace: "nowrap" }}>
                        <div className="form-group">
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={this.onclick1.bind(this)} >添加客房预订信息</button>
                            <button
                                type="button"
                                className="btn btn-info"
                                style={{ marginLeft: "10px" }}
                                onClick={this.onclick2.bind(this)} >编辑客房预订信息</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="search" style={{ marginLeft: "50px", fontSize: "14px", marginRight: "10px" }}>搜索客人预订信息</label>
                            <input type="text" className="form-control" id="search" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
                <form className="" style={{ display: this.state.display_naem }}>
                    <TextGroup
                        name="姓名"
                        value=""
                        placeholder="请输入你的名字"
                        type="text"
                        error="错误"
                        info="添加信息"
                    />
                    <TextGroup
                        name="姓名"
                        placeholder="请输入你的名字"
                        type="text"
                    // error="错误"
                    />
                    <TextGroup
                        name="姓名"
                        placeholder="请输入你的名字"
                        type="text"
                    // error="错误"
                    />
                    {/* <div className="form-group col-md-8" style={{ marginTop: "-25px" }}>
                        <label className="control-label" htmlFor="inputSuccess1">Input with success</label>
                        <input
                            type="text" className="form-control"
                            id="inputSuccess1" aria-describedby="helpBlock2"
                            placeholder="客人姓名"
                        />
                        <span id="helpBlock2" className="help-block">A block of help text that breaks onto a new</span>
                    </div> */}
                    <div className="form-group col-md-8">
                        <button className="btn btn-info">添加客房预订信息</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RoomReservation;
