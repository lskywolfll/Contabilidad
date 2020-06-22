import React from 'react'
import Login from '../components/Login/login';
import { Row, Col } from 'antd';

function index() {

    // useEffect(() => {
    //     dispatch(fetchPost())
    // }, [])

    return (
        <div >
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

                    .ant-layout-footer{
                        height: 21vh;
                    }

                    .site-layout-content{
                        margin: 10%;
                    }
                `}
            </style>
        </div>
    )

}

export default index
