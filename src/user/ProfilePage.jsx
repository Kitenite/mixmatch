import ImageUpload from '../main/ImageUpload'
import S3ImageViewer from '../main/S3ImageViewer'

function ProfilePage(props){
    const user = props.user

    return (
        <div>
            <h1>Hello {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <S3ImageViewer imageKey={user.image}/>
            <ImageUpload user={user}/>
            <div>{props.children}</div>
        </div>
    )
}
export default ProfilePage