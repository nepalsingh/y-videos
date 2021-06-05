import axios from 'axios'

const KEY='AIzaSyDQh566iyzrXUUiYihrDD7hjf7wUMA2UXc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  }
})

