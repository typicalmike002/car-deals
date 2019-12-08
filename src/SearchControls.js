import React from 'react'
import ResultsView from './ResultsView'

class SearchControls extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
        this.resultData = [];
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.getResultsAsync = this.getResultsAsync.bind(this)
    }

    handleChange(event) {
        if (event.target.value) {
            this.setState({ [event.target.id]: event.target.value })
        } else {
            delete this.state[event.target.id]
            this.setState({})
        }
    }

    handleRadioChange(event) {
        if (event.target.value) {
            this.setState({ [event.target.name]: event.target.value === "true" ? true : false })
        } else {
            delete this.state[event.target.name]
            this.setState({})
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let queryString = Object.keys(this.state).map(key => key + "=" + this.state[key]).join("&");
        this.getResultsAsync(queryString)
            .then(data => {
                this.resultData = data
                this.setState({})
            });
    }

    async getResultsAsync(queryString) {
        let response = await fetch("http://localhost:3001/_api/cars?" + queryString)
        let data = await response.json()
        return data;
    }

    render() {
        return(
            <div>
                <form className="SearchControls" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="make">Make: </label>
                            <select className="form-control" id="make" value={this.state.make ? this.state.make.value : ""} onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="chevy">Chevy</option>
                                <option value="toyota">Toyota</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="ford">Ford</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="year">Year: </label>
                            <select className="form-control" id="year" value={this.state.year ? this.state.year.value : ""} onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="color">Color: </label>
                            <select className="form-control" id="color" value={this.state.color ? this.state.color.value : ""} onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="red">Red</option>
                                <option value="white">White</option>
                                <option value="gray">Gray</option>
                                <option value="silver">Silver</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="price">Price: </label>
                            <select className="form-control" id="price" value={this.state.price ? this.state.price.value : ""} onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="lower">Less than $15,782</option>
                                <option value="average">From $15,783 to $18,872</option>
                                <option value="higher">Greater than $18,923</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasSunroof === true ? true : false } name="hasSunroof" id="hasSunroof1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasSunroof1">Sunroof</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasSunroof === false ? true : false } name="hasSunroof" id="hasSunroof2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasSunroof2">No Sunroof</label>
                        </div>                    
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasSunroof === undefined ? true : false } name="hasSunroof" id="hasSunroof3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasSunroof3">No preference</label>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.isFourWheelDrive === true ? true : false } name="isFourWheelDrive" id="isFourWheelDrive1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="isFourWheelDrive1">Four Wheel Drive</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.isFourWheelDrive === false ? true : false } name="isFourWheelDrive" id="isFourWheelDrive2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="isFourWheelDrive2">Two Wheel Drive</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.isFourWheelDrive === undefined ? true : false } name="isFourWheelDrive" id="isFourWheelDrive3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="isFourWheelDrive3">No preference</label>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasLowMiles === true ? true : false } name="hasLowMiles" id="hasLowMiles1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasLowMiles1">Low Milage</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasLowMiles === false ? true : false } name="hasLowMiles" id="hasLowMiles2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasLowMiles2">High Milage</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasLowMiles === undefined ? true : false } name="hasLowMiles" id="hasLowMiles3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasLowMiles3">No preference</label>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasPowerWindows === true ? true : false } name="hasPowerWindows" id="hasPowerWindows1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasPowerWindows1">Power windows</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasPowerWindows === false ? true : false } name="hasPowerWindows" id="hasPowerWindows2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasPowerWindows2">No Power windows</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasPowerWindows === undefined ? true : false } name="hasPowerWindows" id="hasPowerWindows3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasPowerWindows3">No preference</label>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasNavigation === true ? true : false } name="hasNavigation" id="hasPowerWindows1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasNavigation1">Onboard Navigation</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasNavigation === false ? true : false } name="hasNavigation" id="hasNavigation2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasNavigation2">No Onboard Navigation</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasNavigation === undefined ? true : false } name="hasNavigation" id="hasNavigation3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasNavigation3">No preference</label>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasHeatedSeats === true ? true : false } name="hasHeatedSeats" id="hasHeatedSeats1" value="true" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasHeatedSeats1">Heated Seats</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasHeatedSeats === false ? true : false } name="hasHeatedSeats" id="hasHeatedSeats2" value="false" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasHeatedSeats2">No Heated Seats</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-3">
                            <input className="form-check-input" type="radio" checked={this.state.hasHeatedSeats === undefined ? true : false } name="hasHeatedSeats" id="hasHeatedSeats3" value="" onChange={this.handleRadioChange} />
                            <label className="form-check-label" htmlFor="hasHeatedSeats3">No preference</label>
                        </div>
                    </div>
                    <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                </form>
                <ResultsView data={this.resultData} />
            </div>
        )
    }
}

export default SearchControls