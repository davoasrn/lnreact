import React from 'react';
import VideosList from '../../../Widgets/VideosList/videosList';

const videosMain = () => (
    <div>
        <VideosList
            type="card"
            title={false}
            loadmore={true}
            start={3}
            amount={3}
        />
    </div>
)

export default videosMain;
