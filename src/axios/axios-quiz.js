import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-4c061-default-rtdb.firebaseio.com/'
})