import ImageUpload from './ImageUpload'

function ProfilePage(props){
    const user = props.user

    return (
        <div>
            <h1>Hello {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <ImageUpload user={user}/>
            <div>{props.children}</div>
        </div>
    )
}
export default ProfilePage