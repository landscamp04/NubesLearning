const express = require("express");
const AWS = require("aws-sdk"); // AWS SDK for JavaScript
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/api/hello', async (req, res) => {
    const s3 = new AWS.S3();

    try {
        //below is some code for production S3 bucket listing. It fails in my local minikube cluster, but will work in AWS EKS deployment
        const data = await s3.listBuckets().promise();
        const bucketNames = data.Buckets.map(bucket => bucket.Name);
        res.json({ message: "Hello Nubes! You're in the Backend now.", buckets: bucketNames });
    } catch (err) {
        if (err.code === 'CredentialsError' || err.code === 'UnknownEndpoint') {
            res.json({ message: "Hello Nubes! You're in the Backend now. (No AWS credentials found)" });
        } else {
            res.json({ message: `Hello Nubes! AWS error: ${err.message}` });
        }
    }
});

app.listen(PORT, '0.0.0.0', () => console.log(`backend is running on port ${PORT}`));
