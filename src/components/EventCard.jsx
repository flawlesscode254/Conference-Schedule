import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard({image}) {
  return (
    <Card style={{ 
        width: '18rem',
        marginBottom: 20,
        }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{
            fontWeight: "bold"
        }}>Jun 25 2022 - Jun 27 2022</p>
        <Button variant="primary">View More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;