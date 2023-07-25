const bucketName = 'the-dumping-grounds';
// @ts-ignore
const s3 = new AWS.S3();

class S3Service {

  async uploadFile(file) {

    if (!file) {
      throw new Error('Please select a file to upload.');
    }

    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file
    };

    const data = await s3.upload(params)
    return data
  }
}

export const bucketService = new S3Service() 