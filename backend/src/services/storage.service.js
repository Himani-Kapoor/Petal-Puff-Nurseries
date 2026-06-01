import ImageKit from '@imagekit/nodejs'
import 'dotenv/config'


const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file, fileName) {
    const result = await imagekit.files.upload({
        file: file,
        fileName: fileName,
        useUniqueFileName: false
    });
    return result;
}

export default {
    uploadFile
};