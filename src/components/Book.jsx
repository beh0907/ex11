import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Book = ({ book }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                상세 보기
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body className='book'>
                            <Image src={book.thumbnail ? book.thumbnail : 'http://via.placeholder.com/170x150'} />
                            <div className='ellipsis'>가격 : {book.price} 원</div>
                            <div className='ellipsis'>저자 : {book.authors}</div>
                            <div className='ellipsis'>출판사 : {book.publisher}</div>
                            <hr />
                            <div>{book.contents}</div>
                            <hr />
                            <div className='ellipsis'>{book.status}</div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Book