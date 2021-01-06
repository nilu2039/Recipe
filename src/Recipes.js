import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import  "./App.css"

const Recipes = ({title, calorie, image, ingredients}) => {
    return (
        <div>
        <Card className = "card">
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{ingredients.map((item, index) => (
                    <li>{item.text}</li>
                ))}</CardSubtitle>
                <img width="50%" src={image} alt="Card image cap" />
            </CardBody>
        </Card>          
        </div>
    )
}

export default Recipes;