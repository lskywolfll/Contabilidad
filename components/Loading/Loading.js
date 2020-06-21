import React from 'react'
import Styles from './Loading.module.css'

function Loading() {
    return (
        <div className={Styles['lds-dual-ring']}></div>
    )
}

export default Loading
