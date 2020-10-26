import React, { createFactory } from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import './App.css';




class Home extends React.Component {

  state = {
    ville : '',
    person: []
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.ville);

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.ville}&appid=f1eb60110179010c2164fc83ec2b1eda`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons: persons });
          console.log("toto:", persons);
        })
        .catch((error) => {
        console.log(error)
      });

}

  render() {
    const person = this.state.persons;
    return (
      <div className="corps">
        <div> Ajouter une ville pour voir sa température
          </div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", marginTop: 20 }}>
            <Card key={createFactory.id} style={{ maxWidth: 1050, marginLeft: 15, marginRight: 15, marginTop: 20 }}>
              <CardActionArea>
                  <CardMedia style={{ width: 750, height: 380,  display: 'inline-block', position: 'relative'}}
                    image="toto"
                    title='{category.type}'
                    />
                    <Typography style={{ position: 'absolute', fontFamily: 'georgia', justifyContent: 'center', top: 80, left: 80}}> pays: {person?.sys?.country} </Typography>
                    <Typography style={{ position: 'absolute', fontFamily: 'georgia', justifyContent: 'center', top: 130, left: 80}}> ville: {person?.name} </Typography>
                    <Typography style={{ position: 'absolute', fontFamily: 'georgia', justifyContent: 'center', top: 180, left: 80}}> Temperture: {person?.main?.temp} </Typography>
                    <Typography style={{ position: 'absolute', fontFamily: 'georgia', justifyContent: 'center', top: 230, left: 80}}> Temperture min: {person?.main?.temp_min} </Typography>
                    <Typography style={{ position: 'absolute', fontFamily: 'georgia', justifyContent: 'center', top: 280, left: 80}}> temperature max: {person?.main?.temp_max} </Typography>

                <CardContent />
              </CardActionArea>
              <CardActions style={{ background: 'oldlace', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='ville'
                        onChange={this.myChangeHandler}
                    />
                    <input type='submit' style={{marginLeft: 10 }} />
                </form>
                
              </CardActions>
            </Card>

      </div>
      
      </div>
    )
  }
}


export default Home;