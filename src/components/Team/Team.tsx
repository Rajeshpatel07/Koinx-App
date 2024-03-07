import TeamCard from "./TeamCard";

export default function Team (){
    return(

        <div className="border p-5 bg-white my-2 rounded-xl w-full xl:w-66 md:p-5">
            <h1 className="text-3xl mb-4">Team</h1>
            <div>
                <h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero id nesciunt dicta rerum 
                    deserunt illum incidunt ducimus, debitis voluptatum placeat cupiditate soluta repellendus qui quisquam suscipit vitae voluptates provident delectus?
                </h2>

                <TeamCard/>
            </div>
        </div>
    )
}