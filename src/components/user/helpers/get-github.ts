import axios from 'axios'

export async function getGitHub(username: string) {
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`)
        return user
    } catch (err) {
        return null
    }
}
