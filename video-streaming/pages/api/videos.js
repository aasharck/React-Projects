// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import busboy from 'busboy';
import fs from 'fs';

const CHUNK_SIZE_IN_BYTES = 1000000; //1 MB

export const config = {
  api: {
    bodyParser: false,
  },
};

function uploadVideoStream(req, res) {
  const bb = busboy({ headers: req.headers });
  bb.on('file', (_, file, info) => {
    const fileName = info.filename;
    const filePath = `./videos/${fileName}`;

    const stream = fs.createWriteStream(filePath);
    file.pipe(stream);
  });

  bb.on('close', () => {
    res.writeHead(200, { Connection: 'close' });
    res.end('Fin.');
  });

  req.pipe(bb);
  return;
}

function getVideoStream(req, res) {
  const range = req.headers.range;
  if (!range) {
    return res.status(400).send('Range must be provided');
  }
  const videoId = req.query.videoId;
  const videoPath = `./videos/${videoId}.mp4`;
  const videoSizeInBytes = fs.statSync(videoPath).size;
  const chunkStart = Number(range.replace(/\D/g, ''));
  const chunkEnd = Math.min(
    chunkStart + CHUNK_SIZE_IN_BYTES,
    videoSizeInBytes - 1
  );
  const contentLength = chunkEnd - chunkStart + 1;
  const headers = {
    'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, {
    start: chunkStart,
    end: chunkEnd,
  });
  videoStream.pipe(res);
}

export default function handler(req, res) {
  const method = req.method;

  if (method === 'GET') {
    return getVideoStream(req, res);
  }

  if (method === 'POST') {
    return uploadVideoStream(req, res);
  }

  return res.status(405).json({ error: 'This method is not allowed' });
}
