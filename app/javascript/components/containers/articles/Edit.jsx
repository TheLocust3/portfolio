import React from 'react'

class Edit extends React.Component {

    render() {
        return (
            <div>
                Edit Article: {this.props.match.params['id']}
            </div>
        )
    }
}

export default Edit
