import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;

export default function CardBeer ({name, image_url,tagline }){
  return (
      <div>

        <Row type="flex" justify="center">
        <Col span={1}>
        <Link to ={'/'}>
        <Card
         hoverable
         style={{ width:240}}
         cover={<img alt="example" src = {image_url} style={{width: "100px", height:"60%", marginLeft: "30%"}} />} 
        >

        <Meta
        title= {name}
        description= {tagline}
        />   

        </Card>
        </Link>
        </Col>
        </Row>
      </div>
  )
}