import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  console.log('first video')
  console.log(video)
  console.log(video.snippet.title)
  const videoId = video.id.videoId
  console.log(videoId)
  const url = 'https://www.youtube.com/embed/' + videoId
  console.log(url)

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default VideoDetail
