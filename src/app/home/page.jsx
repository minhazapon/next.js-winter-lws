import Image from "next/image";

import nextimage from "@/componentZ/pic/nextjsp.jpeg"



export const metadata = {
    title: "apon the react master",
    description: "apon the react master",
  };
  

const homepage = () => {


    return (
        <div>


           <p className=" text-center mt-10 mb-10  ">apon the react master</p>
          
           <div className=" flex justify-center mb-10">
                
           <Image className=" rounded-2xl " src={nextimage} alt="nextjs image" height={500} width={600} />

           </div>
           
            
        </div>
    );
};

export default homepage;