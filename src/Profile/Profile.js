
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
              <div>
                        <Card style={{ width: '22rem',marginTop:"2rem" }}>
              <Card.Img variant="top" src={this.props.Person.imgSrc} alt="ProfilePhoto" />
              <Card.Body>
                <Card.Title>{this.props.Person.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.Person.profession}</Card.Subtitle>
                <Card.Text>
                {this.props.Person.bio}
                </Card.Text>
                <Card.Footer className="text-muted">{this.state.date.toLocaleTimeString()}</Card.Footer>
               
              </Card.Body>
            </Card>
                      
                    </div>
        )
    }
}

