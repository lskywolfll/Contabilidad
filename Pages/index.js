import React from 'react'
// import { fetchPost } from '../store/actions/postAction';
// import { connect } from 'react-redux';
// import *

// export async function getServerSideProps() {
//     return {
//         props: {
//             data: 'algo'
//         }
//     }
// }

function index(props) {

    // useEffect(() => {
    //     dispatch(fetchPost())
    // }, [])

    console.log(props)

    return (
        <div>
            Hola!!
        </div>
    )

}

export default index
