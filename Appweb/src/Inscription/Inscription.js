import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';




class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            email: '',
            password: '',
            redirection: false

        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            pseudo: this.state.pseudo,
            email: this.state.email,
            password: this.state.password,
        };

        axios.post(`http://127.0.0.1:8000/user/ajout`, JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                this.setState({ redirection: true });
            })

    }


    render() {
        
        const { redirection } = this.state;
        if (redirection) {
            return <Redirect to='/Connexion' />;
        }
        return (
            <div style={{ textAlign: "center", marginTop: 60 }}>
                <form onSubmit={this.handleSubmit}>
                    <h1>Inscription</h1>
                    <p>Entrer votre pseudo</p>
                    <input
                        type='text'
                        name='pseudo'
                        onChange={this.myChangeHandler}
                    />
                    <p>Entrer votre email</p>
                    <input
                        type='text'
                        name='email'
                        onChange={this.myChangeHandler}
                    />
                    <p>Entrer votre mot de passe</p>
                    <input
                        type='text'
                        name='password'
                        onChange={this.myChangeHandler}
                    />
                    <p>Confirmer votre mot de passe</p>
                    <input
                        type='text'
                        name='passConfirm'
                        onChange={this.myChangeHandler}
                    />
                    <br />
                    <br />

                    <input type='submit' style={{ background: "blue", width: 210, height: 50 }} />
                </form>
            </div>
        );
    }
}

export default Inscription;