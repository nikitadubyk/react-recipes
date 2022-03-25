import { useState, useCallback } from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const request = useCallback(async url => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(url)
            setIsLoading(false)
            return data
        } catch (error) {
            console.log(error)
            alert('Failed to fetch data')
        }
    }, [])

    return { isLoading, request }
}
