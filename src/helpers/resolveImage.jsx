import { Storage } from 'aws-amplify'

const resolveImage = async (imageKey) => {
    // Remove prefix
    const truncatedImage = imageKey.replace(/^(public\/)/,"");
    const url = await Storage.get(truncatedImage)
    var response = await fetch(new Request(url))
    if (response.status === 200) {
        return url
    }
}

export default resolveImage