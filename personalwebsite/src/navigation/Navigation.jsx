import React, { Component } from 'react'

import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
	render() {
		return (
			<Nav fill variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
					Disabled
					</Nav.Link>
				</Nav.Item>
			</Nav>
		)
	}
}
