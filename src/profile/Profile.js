const Profile=({FullName, bio, profession,children,handleAlert})=>{
    return(
        <div>
            <h1>{FullName}</h1>
            <h2 className="bou">{bio}</h2> 
            <h3>{profession}</h3>
            {
                children
            }
            <button onClick={()=> handleAlert(FullName)}>Hello</button>
        </div>
    )
}

export default Profile