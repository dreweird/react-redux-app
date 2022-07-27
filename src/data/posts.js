import { sub } from 'date-fns'

const posts = [
    { 
      id: '1', title: 'First Post!', content: 'Hello!', 
      date: sub(new Date(), { minutes: 10 }).toISOString(), user: 1,
      reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
    },
    {
       id: '2', title: 'Second Post', content: 'More text', 
       date: sub(new Date(), { minutes: 5 }).toISOString(), user: 2,
       reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0} 
    }
  ]

  export default posts;