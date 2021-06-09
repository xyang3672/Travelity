import React, { Component } from 'react'

export class NearbyList extends Component {

    render() {
        const locations = this.props.locations;
        return (
            <div className="nearby">
                <h2> Nearby Places </h2>
                <ol>
                    {locations.map(loc => (
                        <li key={loc.venue.id}>
                            <div>
                                <p className='title'> 
                                    Name: <a href="#">{loc.venue.name}</a> 
                                </p>
                                <p>Address: {loc.venue.location.address}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default NearbyList
