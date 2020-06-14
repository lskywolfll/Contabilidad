import React, { Component, useEffect } from 'react'
import { fetchPost } from '../store/actions/postAction';
import { useDispatch } from 'react-redux';

// export async function getServerSideProps() {



//     return {
//         props: {
//             data: 'algo'
//         }
//     }
// }

function index(props) {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchPost())
    // }, [])

    dispatch(fetchPost())

    console.log(props)

    return (
        <div>
            Hola!!

            {/* {this.state.post !== null && (
                this.state.post
            )} */}
        </div>
    )

}

export default index
