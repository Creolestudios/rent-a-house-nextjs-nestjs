import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function admin() {
    const router = useRouter()
    useEffect(() => {
        router.push("/admin/login")
    }, [])
    return (
        <></>
    )
}

export default admin