import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return <div className="bg-secondary p-2 mb-2 rounded-3">
    <h2 className="custom-name">{props.name}</h2>
    <img
      src={props.imgSrc}
      alt="avatar_img"
      height={100}
      width={100}
      className="rounded rounded-circle h-5"
    />
    <p>{props.number}</p>
    <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div className="bg-black p-3">
    <Container fluid>
      <h1 className="text-primary text-center p-3">My Contacts</h1>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Byonen" imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" number="+123 456 789" email="b@beyonce.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Rohit lavda" imgSrc="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user" number="+91-8678954321" email="rohitlavda@hmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Ms.Dhoni" imgSrc="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg" number="+91-7778392872" email="msdhoni@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Virat Kholi" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg" number="+123 456 789" email="b@beyonce.com"/>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="omraje Ambure" imgSrc="https://media.licdn.com/dms/image/C5603AQHi1jnLmjd6EQ/profile-displayphoto-shrink_200_200/0/1658420656675?e=2147483647&v=beta&t=7U1md4f33QaErlqbxDO-WugK1UYBLz9r_QteJoK59uM" number="+91-8799911512" email="omrajeambure22@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Rohit Sharma" imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" number="+91-3768438237" email="rohitsharma@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Arijit singh" imgSrc="https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3" number="+91-6574937224" email="Arijitsingh@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Ruturaj Gaikwad" imgSrc="https://documents.iplt20.com/ipl/IPLHeadshot2024/102.png" number="+91-7483728932" email="rutu@gmail.com"/>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Narendra modi" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNouSYF7SGHOcJxxOF7XyyMbzyNWD5abuwjQ&s" number="+91-7433746734" email="nmodi@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="uddhav thackeray" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV7Bv5WDE5ZdxYPj6NuNGK915hSFtkcwR4g&s" number="9748945883" email="UBT@gmail.com" />
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Ajit Pawar" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgdbXukBl_23AclRH4EEU36m12s7GDFGBig&s" number="9872874556" email="ajitpawar@gmail.com"/>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card name="Sharad Pawar" imgSrc="https://upload.wikimedia.org/wikipedia/commons/0/04/The_Union_Minister_for_Agriculture_and_Food_Processing_Industries%2C_Shri_Sharad_Pawar_addressing_at_the_launch_of_the_Sahana_Group%E2%80%99s_New_Marathi_Channel_%E2%80%9CJai_Maharashtra%E2%80%9D%2C_in_Mumbai_on_April_27%2C_2013_%28cropped%29.jpg" number="+91-7329595323" email="sharadpawar@gmail.com"/>
        </Col>
      </Row>
    </Container>
  </div>,
  document.getElementById("root")
);
