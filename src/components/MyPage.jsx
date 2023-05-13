import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row, Card, Form, InputGroup, Button } from 'react-bootstrap'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { app } from '../firebase/firebaseInit'

const MyPage = () => {
    const uid = sessionStorage.getItem('uid')
    const db = getFirestore(app)
    const [image, setImage] = useState('http://via.placeholder.com/200x200')

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email: '',
        name: '',
        phone: '',
        address: '',
        photo: ''
    })
    const { name, phone, address, photo } = form

    const getUser = async () => {
        setLoading(true)
        const result = await getDoc(doc(db, 'user', uid));
        setForm(result.data())
        setLoading(false)
    }

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

    const onUpdate = async () => {
        if (!window.confirm('수정된 내용을 저장하시겠습니까?')) return

        await setDoc(doc(db, 'user', uid), form)
        alert('수정이 완료되었습니다.')
    }

    useEffect(() => {
        getUser()
    }, [])

    if (loading) return <h1 className='text-center my-5'>유저 정보 조회 중......</h1>
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
                            <Form.Control type='file' name='photo' className='mt-2' onChange={onChangeFile} />
                        </div>
                        <Button onClick={onUpdate} className='w-100'>정 보 수 정</Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default MyPage