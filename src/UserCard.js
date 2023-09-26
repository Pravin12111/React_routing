
const CardStyle = {
    border: '2px solid black',
    width: '200px',
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer'
}

export default function UserCard({userName})
{
return(
    <div className="user-card" style={CardStyle}>
    <h1>{userName}</h1>
    <p>Hello Everyone !</p>
    </div>
)
}

const UserCardBioStyle={
    border: '2px solid black',
    width: '200px',
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer'
}
export function UserCardBio({userName})
{
return(
    <div className="user-card" style={UserCardBioStyle}>
    <h1>{userName}</h1>
    <p>Hello Everyone !</p>
    </div>
)
}

const UserCardBioCityStyle={
    border: '2px solid black',
    width: '200px',
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer'
}
export function UserCardCityBio({userName})
{
return(
    <div className="user-card" style={UserCardBioCityStyle}>
    <h1>{userName}</h1>
    <p>Hello Everyone !</p>
    </div>
)
}


