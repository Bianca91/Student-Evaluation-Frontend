import React, {PureComponent} from 'react'

class StudentForm extends PureComponent {
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
					<label htmlFor="firstName">Student name</label>
					<input name="firstName" id="firstName" value={
						this.state.firstName || initialValues.firstName || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="lastName">Student lastname</label>
					<input name="lastName" id="lastName" value={
						this.state.lastName || initialValues.lastName || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="profilePicture">Student Picture</label>
					<input name="profilePicture" id="profilePicture" value={
						this.state.profilePicture || initialValues.profilePicture || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
          <label htmlFor="color">Student Progress</label>
          <input name="color" id="color" value={
            this.state.color || initialValues.color || ''
          } onChange={ this.handleChange } />
        </div>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default StudentForm
