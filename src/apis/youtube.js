import axios from 'axios'

const KEY = 'AIzaSyAknVqgXHsJY6HO0qZEmULc0pzPmeUIt7w'



export default  axios.create({
   
baseURL: 'https://www.googleapis.com/youtube/v3',
    
params: {
    part: 'snippet',
    maxResults: 1,
    key: KEY
    
}
})


