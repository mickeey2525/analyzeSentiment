import * as aws from "aws-sdk";
const s3 = new aws.S3();

export class JobExecutor {
  public static async execute(
    bucketName: string,
    objectKey: string
  ): Promise<void> {
    await s3
      .deleteObject({
        Bucket: bucketName,
        Key: objectKey
      })
      .promise();
  }
}
