


export default async function getPost() {

   const result = await fetch('https://jsonplaceholder.typicode.com/users')

   return result.json()

}