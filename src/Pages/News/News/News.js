import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const {title, details, image_url, category_id}= news;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary">All news in this Category</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default News;