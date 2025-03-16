import express from 'express';
import ytdl from 'ytdl-core';

const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
    const videoUrl = req.query.url;
    const format = req.query.format;
    if (!videoUrl) {
        return res.status(400).send('URL is required');
    }

    try {
        res.header('Content-Disposition', `attachment; filename="video.${format || 'mp4'}"`);
        ytdl(videoUrl, { format: format || 'mp4' }).pipe(res);
    } catch (error) {
        res.status(500).send('Error downloading video');
    }
});

app.get('/video-info', async (req, res) => {
    const videoUrl = req.query.url;
    if (!videoUrl) {
        return res.status(400).send('URL is required');
    }

    try {
        const info = await ytdl.getInfo(videoUrl);
        const formats = info.formats.map(format => ({
            quality: format.qualityLabel,
            size: format.contentLength
        }));
        res.json({
            title: info.videoDetails.title,
            channel: info.videoDetails.author.name,
            thumbnail: info.videoDetails.thumbnails[0].url,
            duration: info.videoDetails.lengthSeconds,
            formats: formats
        });
    } catch (error) {
        res.status(500).send('Error fetching video info');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
