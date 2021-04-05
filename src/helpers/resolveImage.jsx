import { Storage } from 'aws-amplify'

const resolveImage = async (imageKey) => {
    // Remove prefix
    const truncatedImage = imageKey.replace(/^(public\/)/,"");
    const url = await Storage.get(truncatedImage)
    var myRequest = new Request(url);
    var response = await fetch(myRequest)
    if (response.status === 200) {
        return url
    }
}

export default resolveImage