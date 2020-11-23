import React, { Component } from 'react'

export default class Button extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        const {render} = this.props;
        return (
            <div className="event-button">
                {render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        )
    }
}
