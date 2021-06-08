import React, { Component } from 'react'

export class NearbyList extends Component {

    render() {
        const locations = this.props.locations;
        return (
            <div className="nearby">
                <h2> Nearby Places </h2>
                <input type="text" />
                <ol>
                    {locations.map(loc => (
                        <li>
                            <div>
                                <h2>{loc.venue.name}</h2>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default NearbyList
