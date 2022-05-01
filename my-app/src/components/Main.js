import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div>
                <br/>
                <h1>This is the Main component</h1>
                <div>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                    <Button variant="link">Link</Button>
                </div>
                <br/><br/>
                <div className='row'>
                    <div className='col-md-1'>
                        <div className='position-fixed'>
                            {/* <Badge bg="dark" className='opacity-75'><h3>Primary</h3></Badge> */}
                            {/* <div className='button_hlf_rnd'> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="" class="bi bi-gift opacity-75 bg-secondary button_hlf_rnd" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                            </svg>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <Button variant="outline-primary">Primary</Button>{' '}
                    <Button variant="outline-secondary">Secondary</Button>{' '}
                    <Button variant="outline-success">Success</Button>{' '}
                    <Button variant="outline-warning">Warning</Button>{' '}
                    <Button variant="outline-danger">Danger</Button>{' '}
                    <Button variant="outline-info">Info</Button>{' '}
                    <Button variant="outline-light">Light</Button>{' '}
                    <Button variant="outline-dark">Dark</Button>
                </div>
                <br/>
                <div>
                    <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge>{' '}
                    <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
                    <Badge bg="warning" text="dark">
                        Warning
                    </Badge>{' '}
                    <Badge bg="info">Info</Badge>{' '}
                    <Badge bg="light" text="dark">
                        Light
                    </Badge>{' '}
                    <Badge bg="dark">Dark</Badge>
                </div>
            </div>
        )
    }
}

export default Main;