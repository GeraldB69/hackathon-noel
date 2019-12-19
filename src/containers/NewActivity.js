import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const NewActivity = ({activities, dispatch}) => {


    const submitForm = (event) => {
        event.preventDefault()
        let data = Array.from(new FormData(event.target).entries())
        // console.log(data)

        //Récupération de catégories séléctionnées
        const cat = ['art', 'bricolage', 'cosmetique', 'recyclage', 'technologie']

        let filteredActivitys = []

        for (let i = 0; i < cat.length; i++) {
            if (data.find(item => item[0] === cat[i]) !== undefined) {
                filteredActivitys.push(data.find(item => item[0] === cat[i])[0])
            }
        }

        //Récupération de jours séléctionnés
        const day = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

        let filteredDays = []

        for (let i = 0; i < day.length; i++) {
            if (data.find(item => item[0] === day[i]) !== undefined) {
                filteredDays.push(data.find(item => item[0] === day[i])[0])
            }
        }

        const newEntry = {
            "id": activities.length+1,
            "first_name": data.filter(item => item[0] === 'first_name')[0][1],
            "last_name": data.filter(item => item[0] === 'last_name')[0][1],
            "avatar": 'https://randomuser.me/api/portraits/med/men/75.jpg',
            "longitude": "4.8269787",
            "latitude": "45.7463242",
            "location": data.filter(item => item[0] === 'location')[0][1],
            "activity_title": data.filter(item => item[0] === 'activity_title')[0][1],
            "activity_picture": 'https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80',
            "activity_duration": parseInt(data.filter(item => item[0] === 'activity_duration')[0][1]) ,
            "activity_age_min": parseInt(data.filter(item => item[0] === 'activity_age_min')[0][1]),
            "activity_age_max": parseInt(data.filter(item => item[0] === 'activity_age_max')[0][1]),
            "category": filteredActivitys,
            "description": data.filter(item => item[0] === 'description')[0][1],
            "price": parseInt(data.filter(item => item[0] === 'price')[0][1]),
            "dispo": filteredDays
        }

        dispatch({type: 'ADD_NEW_ACT', id: newEntry})

    }

    return (
        <div className="newActivityContainer">
            <Form onSubmit={submitForm}>
                <FormGroup row>
                    <Col lg={{size: 4, offset: 1}} sm={12}>
                        <div className="newActivityID">
                            <FormGroup row>
                                <Label for="last_name" sm={2}>Nom</Label>
                                <Col sm={10}>
                                    <Input type="text" name="last_name" id="last_name" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="first_name" sm={2}>Prénom</Label>
                                <Col sm={10}>
                                    <Input type="text" name="first_name" id="first_name" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="adresse" sm={2}>Adresse</Label>
                                <Col sm={10}>
                                    <Input type="text" name="adresse" id="adresse" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="zip" sm={2}>CP</Label>
                                <Col sm={10}>
                                    <Input type="text" name="zip" id="zip" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="location" sm={2}>Ville</Label>
                                <Col sm={10}>
                                    <Input type="text" name="location" id="location" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="avatar" sm={2}>Avatar</Label>
                                <Col sm={10}>
                                    <Input type="file" name="avatar" id="avatar" />
                                </Col>
                            </FormGroup>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="newActivityDescription">
                            <FormGroup row>
                                <Label for="activity_title" sm={2}>Titre</Label>
                                <Col sm={10}>
                                    <Input type="text" name="activity_title" id="activity_title" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="activity_duration" sm={2}>Durée</Label>
                                <Col sm={10}>
                                    <Input type="select" name="activity_duration" id="activity_duration">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="activity_age_min" sm={2}>Age minimum</Label>
                                <Col sm={2}>
                                    <Input type="select" name="activity_age_min" id="activity_age_min">
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </Input>
                                </Col>
                                <Label for="activity_age_max" sm={2}>Age maximum</Label>
                                <Col sm={2}>
                                    <Input type="select" name="activity_age_max" id="activity_age_max">
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="category" sm={2}>Categorie</Label>
                                <div>
                                    <Col sm={10}>
                                        <CustomInput type="checkbox" name="art" id="category1" label="Art" />
                                        <CustomInput type="checkbox" name="bricolage" id="category2" label="Bricolage" />
                                        <CustomInput type="checkbox" name="cosmetique" id="category3" label="Cosmetique" />
                                        <CustomInput type="checkbox" name="recyclage" id="category4" label="Recyclage" />
                                        <CustomInput type="checkbox" name="technologie" id="category5" label="Technologie" />
                                    </Col>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="description" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2}>Prix</Label>
                                <Col sm={10}>
                                    <Input type="text" name="price" id="price" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="dispo" sm={2}>Disponibilité</Label>
                                <div>
                                    <Col sm={10}>
                                        <CustomInput type="checkbox" name='lundi' id="dispo1" label="Lundi" />
                                        <CustomInput type="checkbox" name='mardi' id="dispo2" label="Mardi" />
                                        <CustomInput type="checkbox" name='mercredi' id="dispo3" label="Mercredi" />
                                        <CustomInput type="checkbox" name='jeudi' id="dispo4" label="Jeudi" />
                                        <CustomInput type="checkbox" name='vendredi' id="dispo5" label="Vendredi" />
                                        <CustomInput type="checkbox" name='samedi' id="dispo6" label="Samedi" />
                                        <CustomInput type="checkbox" name='dimanche' id="dispo7" label="Dimanche" />
                                    </Col>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="activity_picture" sm={2}>Image</Label>
                                <Col sm={10}>
                                    <Input type="file" name="activity_picture" id="activity_picture" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 6, offset: 3 }}>
                                    <Button color="primary" size="lg" block>Submit</Button>
                                </Col>
                            </FormGroup>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    activities : state.activities
})

export default connect(mapStateToProps)(NewActivity)