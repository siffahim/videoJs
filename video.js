const video = videojs("videoPlayer", {
    autoplay: 'muted',
    controls: true,
    poster: "http://bitly.ws/wSMz",
    loop: false,
    playbackRates: [0.25, 0.5, 0.75, 1.5, 1.25, 1.75],
    plugins: {
        hotkeys: {
            enableModifiersForNumbers: false,
            seekStep: 50
        }
    }
})

video.zoomrotate({
    rotate: 360,
    zoom: 1
})

video.watermark({
    file: './images/sif.png',
    xpos: 100,
    ypos: 100,
    xrepeat: 0,
    opacity: 0.8,
    clickable: true,
    url: "https://saifulportfolio.netlify.app/",
    className: 'vjs-watermark'
})

video.thumbnails({
    0: {
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    30: {
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
    }
})

video.playlist([
    {
        src: [
            'http://stream.flowplayer.org/bauhaus/624x260.webm',
        ],
        poster: '',
    },
    {
        src: [
            'http://vjs.zencdn.net/v/oceans.mp4',
        ],
        poster: 'http://www.videojs.com/img/poster.jpg',
    }
])

/*
    fluid: true,
    aspectRatio: '4:3'
    userActions: {
        hotkeys: true
    }
*/