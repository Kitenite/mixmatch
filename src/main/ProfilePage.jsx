function ProfilePage(props){
    console.log(props)
    const user = props.user
    return (
        <div>
            <h1>Hello {user.attributes.name}</h1>
            <h1>Email: {user.attributes.email}</h1>
            <div>{props.children}</div>
        </div>
    )
}
export default ProfilePage