import React, {PureComponent} from 'react'

class ClassForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="batchNr">Class Nr</label>
					<input name="batchNr" id="batchNr" value={
						this.state.batchNr || initialValues.batchNr || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="startDate">Start date</label>
					<input name="startDate" id="startDate" value={
						this.state.startDate || initialValues.startDate || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="endDate">End date</label>
					<input name="endDate" id="endDate" value={
						this.state.endDate || initialValues.endDate || ''
					} onChange={ this.handleChange } />
				</div>


				<button type="submit">Save</button>
			</form>
		)
	}
}

export default ClassForm
