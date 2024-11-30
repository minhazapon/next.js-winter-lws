import Link from "next/link";





const page = () => {

    const blogs = [

     {
        id:1,
        title:"next.js",
        description:"the react frame work for web" 

     },
     {
        id:2,
        title:"react.js",
        description:"the javaScript library for web" 

     },
     

    ]


    return (
        <div className=" flex justify-center mt-16 mb-16 ml-9 mr-9">


            <div>
 
                   {

                       blogs.map( (blogs) => (  

                         <li key={blogs.id}>

                         <Link href={`/blog/${blogs.title}`} ></Link>{blogs.title }
                         <br></br>
                         <Link href={`/blog/${blogs.description}`} >{blogs.description }</Link>
                        
                    </li>

                    ))}


            </div>
            
        </div>
    );
};

export default page;