import { useCallback } from "react";

const apiURL = 'http://localhost:8080'

export const API = () => {
    const fetchAllCampaigns = useCallback( async () => {
        return new Promise((resolve, reject) => {
            fetch(`${apiURL}/fetch-all`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    resolve(data)
                })
                .catch(error => {
                    console.log(error)
                    reject({ error: 'There was an error' })
                })
        })
    }, [])

    /**
     * 
     * @param { { title: string, description: string, expected: string, img: string, progress: string, donorCount: string, address: string, deployer: string }} data
     */
    const addCampaign = useCallback(async (data) => {
        let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }

        return new Promise((resolve, reject) => {
            fetch(`${apiURL}/create`, options)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject({ error: error.message })
                })
        })

    }, [])

    const removeCampaign = useCallback(async (address) => {
        let options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contractAddress: address}) 
        }

        return new Promise((resolve, reject) => {
            fetch(`${apiURL}/delete-campaign`, options)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject({ error: error.message })
                })
        })

    }, [])

    const updateCampaign = useCallback(async (address, data) => {
        let options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }

        return new Promise((resolve, reject) => {
            fetch(`${apiURL}/edit`, options)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject({ error: error.message })
                })
        })

    }, [])

    const fetchUserCampaigns = useCallback( async (address) => {
        let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userAddress: address}) 
        }

        return new Promise((resolve, reject) => {
            fetch(`${apiURL}/fetch-user-campaigns`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    resolve(data)
                })
                .catch(error => {
                    console.log(error)
                    reject({ error: 'There was an error' })
                })
        })
    }, [])

    return {
        fetchAllCampaigns,
        addCampaign, 
        removeCampaign,
        updateCampaign,
        fetchUserCampaigns
    }
}