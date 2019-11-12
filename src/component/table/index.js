import React from "react"
import { ChromePicker } from "react-color"
import "./index.css"

export default class Table extends React.Component {
    // @constructor
    // @param {object} _sorts
    // @param {array} _lists
    constructor (props) {
        super(props)
        this._lists = []
        this._resetSorts(props)
    }

    static getDerivedStateFromProps (nextProps) {
        return {
            keys: nextProps.keys.map(value => Object.assign(value, {
                show: false
            }))
        }
    }

    componentDidUpdate() {
        this._resetSorts(this.props)
    }

    // Reset this._sorts
    // @param {object} props
    // @private
    _resetSorts (props) {
        this._sorts = {}
        props.keys.forEach((value, index) => {
            this._sorts[value.key] = index
        })
    }
    
    // UID
    // @param {number} index
    // @return {string}
    // @private
    _uid (index) {
        return [
            index,
            Date.now()
        ].join("-")
    }

    // 列表数据清洗
    // @private
    _dynList () {
        this._lists = []
        let index = 0, keys = Object.keys(this._sorts)
        for (let value of this.props.values) {
            this._lists.push(new Array(keys.length))
            for (let key of keys) {
                let x = this._sorts[key]
                this._lists[index][x] = value[key]
            }
            
            index ++
        }
    }

    // 宽度
    // @private
    _width () {
        return (100 / this.props.keys.length) + "%"
    }

    // 列表项
    // @param {array} list
    // @private
    _iter (list) {
        return list.map((value, index) => {
            return <div 
                className="li" 
                key={ this._uid(index) }
                style={{ width: this._width() }}
            >
                <div className="value">
                    { value.dyn || value }
                </div>
            </div>
        })
    }
    
    // 头部颜色选择
    // @private
    _key_color () {
        return <div className="module">
            <div className="title">颜色</div>
            <div className="config color">
                <div className="view mhover"></div>
            </div>
        </div>
    }
    
    // 头部排序
    // @private
    _key_sort () {
        return <div className="module">
            <div className="title">排序</div>
            <div className="config sort">
                <button>升序</button>
                <button>降序</button>
            </div>
        </div>
    }
    
    // 头部筛选
    // @private
    _key_filter () {
        return <div className="module">
            <div className="title">字段筛选</div>
            <div className="config filter-key">
                <div className="li">
                    <input type="checkbox"/>
                    <span>全选</span>
                </div>
            </div>
        </div>
    }
    
    // 头部过滤
    // @private
    _key_filter_number () {
        return <div className="module">
            <div className="title">过滤</div>
            <div className="config filter-number">
                <select className="type">
                    <option value="filter">排除</option>
                    <option value="color">颜色</option>
                    <option value="icon">图标</option>
                </select>
                <div className="data">
                    <input type="number" className="left" />
                    <select className="data-type">
                        <option value=">">{ ">=" }</option>
                        <option value="<">{ "<=" }</option>
                        <option value="~">{ "~" }</option>
                    </select>
                    <input type="number" className="right" />
                </div>
            </div>
        </div>
    }

    // 列设置
    // @private
    _setting (value) {
        return value.show && <div className="setting">
            { this._key_color() }
            { this._key_sort() }
            { this._key_filter() }
            { this._key_filter_number() }
        </div>
    }

    // 头部点击
    // @private
    _key_click (value, index) {
        this.setState((state) => {
            state.keys[index].show = !value.show
            return state
        })
    }
    
    // 头部
    // @private
    _keys () {
        return <div className="keys">{ 
            this.state.keys.map((value, index) => {
                return <div 
                    className="li uncopy" 
                    key={ this._uid(index) }
                    style={{ width: this._width() }}
                    onClick={() => this._key_click(value, index)}
                >
                    { this._setting(value) }
                    <div className="name mhover">
                        { value.name }
                    </div>
                </div>
            })
        }</div>
    }
    
    // 列表
    // @private
    _values () {
        this._dynList()
        return <div className="values">{ 
            this._lists.map((value, index) => {
                return <div 
                    className="ul" 
                    key={ this._uid(index) }
                >{ this._iter(value) }</div>
            })
        }</div>
    }
    
    // 渲染
    // @public
    render () {
        return <div className="Table">
            { this._keys() }
            { this._values() }
        </div>
    }
}
