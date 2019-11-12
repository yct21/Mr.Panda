import React from "react"
import Table, { DynKeys } from "./component/table"
import "./App.css"

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            keys: [{
                name: "姓名",
                key: "name"
            }, {
                name: "年龄",
                key: "age"
            }, {
                name: "性别",
                key: "gender"
            }, {
                name: "地区",
                key: "addr"
            }, {
                name: "出生年月",
                key: "date"
            }],
            values: [{
                name: "panda",
                age: 25,
                gender: 1,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-11"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }, {
                name: "傅小珍",
                age: 21,
                gender: 0,
                addr: "广东省",
                date: {
                    ref: 1573467347285,
                    dyn: "2019-11-10"
                }
            }]
        }
    }
    
    render () {
        return <div id="App">
            <div className="table">
                <Table keys={this.state.keys} values={this.state.values}/>
            </div>
        </div>
    }
}