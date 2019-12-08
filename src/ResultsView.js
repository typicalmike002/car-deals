import React from 'react'

class ResultsView extends React.Component {

    constructor(props) {
        super(props);
        this.capitalize = this.capitalize.bind(this)
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render() {
        console.log(this.props.data);
        this.items = this.props.data.map((item, key) => 
            <li className="list-group-item" key={key}>
                <table className="table table-borderless">
                    <tbody>
                        <tr className="d-flex">
                            <td className="col-4">Make</td>
                            <td>{this.capitalize(item.make)}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Year</td>
                            <td>{item.year}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Color</td>
                            <td>{this.capitalize(item.color)}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Price</td>
                            <td>{item.price}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Sunroof</td>
                            <td>{this.capitalize(item.hasSunroof.toString())}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Four wheel drive</td>
                            <td>{this.capitalize(item.isFourWheelDrive.toString())}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Low Milage</td>
                            <td>{this.capitalize(item.hasLowMiles.toString())}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Power Windows</td>
                            <td className="col-4">{this.capitalize(item.hasPowerWindows.toString())}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Onboard Navigation</td>
                            <td>{this.capitalize(item.hasNavigation.toString())}</td>
                        </tr>
                        <tr className="d-flex">
                            <td className="col-4">Heated Seats</td>
                            <td>{this.capitalize(item.hasHeatedSeats.toString())}</td>
                        </tr>
                    </tbody>
                </table>
            </li>
        )
        return(<ul className="list-group">{this.items}</ul>)
    }
}

export default ResultsView