



const page = ({params}) => {

    const {id, title, description} = params

    return (
        <div>

            <div>

               <p>Details is-- {id} </p>
               <p>Details is-- {title} </p>
               <p>Details is-- {description} </p>

            </div>
            
        </div>
    );
};

export default page;