import React from 'react'
import Login from '../components/Login/login';
import { Row, Col } from 'antd';

// console.log(process.env.NEXT_PUBLIC_API_HOST)

function index() {

    // useEffect(() => {
    //     dispatch(fetchPost())
    // }, [])

    return (
        <div>
            <Row className="justify-content-center">
                <Col>
                    <div className="pt-5">
                        <Login />
                    </div>
                </Col>
            </Row>
            <style jsx global>
                {`
                    .ant-layout-header{
                        display: none;
                    }
                `}
            </style>
        </div>
    )

}

export default index
