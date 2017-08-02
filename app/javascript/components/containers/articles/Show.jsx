import React from 'react'

class Show extends React.Component {

    render() {
        return (
            <div>
                Show Article: {this.props.match.params['id']}
            </div>
        )
    }
}

export default Show
