import React from 'react'
import { projectName } from '../helpers/constants'
import { Spinner } from 'reactstrap'

const Loader = () => {
	return (
		<div className="App">
			<header className="App-header">
				{projectName}
				<Spinner />
			</header>
		</div>
	)
}

export default Loader
