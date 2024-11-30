

import getPost from '@/app/dataFetch/data';
import PostDetails from '@/componentZ/PostDetails';



export default async function page() {

    const  data =  await getPost()  

    console.log(data)

  return (
    <div className=' flex justify-center mt-20 mb-20 '>

        <div className=' grid  md:grid-cols-3 gap-10 '>

             {
               
               data.map( data => <PostDetails key={data.id} data={data} ></PostDetails> )

             }

        </div>
    
    </div>
  )
}
