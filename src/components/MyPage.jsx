import React from 'react'
import { useState } from 'react'
import { Col, Row, Card, Form, InputGroup, Button } from 'react-bootstrap'

const MyPage = () => {
    const [form, setForm] = useState({
        name: '박인협',
        address: '경기도 안산시 초지동 원초로 61',
        phone: '010-5191-0758',
        image: 'https://via.placeholder.com/200x200',
    })

    const { name, phone, address, image } = form

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onChangeFile = e => {
        setForm({
            ...form,
            image: URL.createObjectURL(e.target.files[0])
        })
    }

    return (
        <Row className='justify-content-center my-5'>
            <Col md={8}>
                <h1 className='text-center'>마이 페이지</h1>
                <Card className='p-3'>
                    <Form>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>이 메 일</InputGroup.Text>
                            <Form.Control name='email' value={sessionStorage.getItem('email')} readOnly />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>이 름</InputGroup.Text>
                            <Form.Control name='name' value={name} onChange={onChange} />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>전화번호</InputGroup.Text>
                            <Form.Control name='phone' value={phone} onChange={onChange} />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>주 소</InputGroup.Text>
                            <Form.Control name='address' value={address} onChange={onChange} />
                        </InputGroup>
                        <div className='my-2'>
                            <img src={image} width={'25%'} />
                            <Form.Control type='file' name='image' className='mt-2' onChange={onChangeFile}/>
                        </div>
                        <Button className='w-100'>정 보 수 정</Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default MyPage