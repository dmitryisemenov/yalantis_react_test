import React from 'react';

import './Page.scss';

export class Page extends React.Component {
    constructor() {
        super();

        this.state = {
            list: undefined,
            showList: false,
            id: undefined
        }
    }

    componentDidMount() {
        fetch('https://yalantis-react-school.herokuapp.com/api/task0/users')
        .then(data => data.json())
        .then(res => this.setState({
            list: Object.entries(res)
        }))
    } 

    handleHover = id => {
        this.setState({
            showList: true,
            id: id
        })
    }

    render() {

        let months = [
            {
                name: 'January',
                id: 1
            },
            {
                name: 'February',
                id: 2
            },
            {
                name: 'March',
                id: 3
            },
            {
                name: 'April',
                id: 4
            },
            {
                name: 'May',
                id: 5
            },
            {
                name: 'June',
                id: 6
            },
            {
                name: 'July',
                id: 7
            },
            {
                name: 'August',
                id: 8
            },
            {
                name: 'September',
                id: 9
            },
            {
                name: 'October',
                id: 10
            },
            {
                name: 'November',
                id: 11
            },
            {
                name: 'December',
                id: 12
            }
        ]

        return (
            <div className="main">
                <div className="main_calendar">
                    {this.state.list !== undefined 
                    ? months.map((item, index) => {
                        return (
                            <div key={index}>
                                <span>{item.name}</span>
                                <span
                                    style={{ backgroundColor: this.state.list.filter(i => Number(i[1].dob.split('').slice(5, 7).join('')) === item.id).length <= 2
                                    ? 'gray' 
                                    : this.state.list.filter(i => Number(i[1].dob.split('').slice(5, 7).join('')) === item.id).length <= 6
                                    ? 'blue'
                                    : this.state.list.filter(i => Number(i[1].dob.split('').slice(5, 7).join('')) === item.id).length <= 10
                                    ? 'green'
                                    : 'red'
                                    }
                                    }
                                    onMouseEnter={this.handleHover.bind(this, item.id)}
                                >{this.state.list.filter(i => Number(i[1].dob.split('').slice(5, 7).join('')) === item.id).length}</span>
                            </div>
                        )
                    })
                    : ''}
                </div>
                {this.state.showList 
                            ? (
                                <div className="main_list">
                                    {this.state.list.filter(i => Number(i[1].dob.split('').slice(5, 7).join('')) === this.state.id).map((itm, idx) => {
                                        return (
                                            <div key={idx} className="main_list--item">
                                                <span>{itm[1].firstName}</span>
                                                <span>{itm[1].lastName}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) 
                            : ''}
            </div>
        )
    }

}

export default Page;