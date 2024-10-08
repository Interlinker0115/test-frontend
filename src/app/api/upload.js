import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import { createUpload, deleteUpload } from '../utils/server/dato';

const DIR = './uploads'

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

const upload = multer({
  storage: multer.diskStorage({
    destination: DIR,
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({});
const uploadMiddleware = upload.array('files');

apiRoute.use(uploadMiddleware);

apiRoute.post(async (req, res) => {
  let result = { success: false, data: {} };

  if (req.method === 'POST') {
    const { files, fileId } = req;
    console.log(fileId, "fileid")

    let uploads = await Promise.all(files.map(file => createUpload(file.path)));
    console.log(fileId, "file-id")
    if (fileId) {
      console.log("Deleting old file version...")
      await deleteUpload(fileId)
    }
    uploads = uploads.map(({ id, url, filename }) => ({
      id,
      url,
      filename
    }));

    result.success = true;
    result.data = { uploads };
  }

  res.json(result);
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
