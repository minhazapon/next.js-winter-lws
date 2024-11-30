



const PostDetails = ({data}) => {

    const {id, name, username, email} = data

    return (
        <div>


            <div>

               <p>{id}</p>
               <p className=" text-xl font-mono">{name}</p>
               <p className=" text-xl font-mono">{username}</p>
               <p className=" text-xl font-mono">{email}</p>
              
            </div>
            
        </div>
    );
};

export default PostDetails;