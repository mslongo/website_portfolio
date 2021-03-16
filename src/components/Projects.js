import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail'
import '../App.css'
import "./Projects.css"
import ImageSlider from './ProjectSlider/ImageSlider';
import { SliderData } from './ProjectSlider/SliderData';
 
function projects(props) {
    return (
        <ImageSlider slides={SliderData}/>
    );
}
 
export default projects;

// <div className="project-container">
        //     <h1>Projects</h1>
        //     <div className="holder">
        //         <div className="thumbnail-container">
        //             <Thumbnail
        //                 link="https://github.com/jayjayish/KillAllBoxes"
        //                 image="PPPPacksPictures.png"
        //                 title="PPP Packs Packages"
        //                 category="BC Game Jam 2020"
        //             />

        //             <Thumbnail
        //                 link="https://github.com/jayjayish/KillAllBoxes"
        //                 image="MentalHealthDiary.jpg"
        //                 title="Mental & Emotional Health Diary"
        //                 category="nwHacks 2020"
        //             />
        //         </div>
        //     </div>

        // </div>