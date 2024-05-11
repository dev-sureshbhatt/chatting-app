import React from "react";
import '../components/profileCard.css'

const ProfileCard = () => {
  return (
    <div className="wrapper">

    <div>      
    <div className="image-div">
            <div className="image-div-part-one">
                <div>chats</div>
                <div>img</div>
                <div>msg</div>
            </div>
            <div className="image-div-part-two">
                <span className="name">Jessica Anderson</span>
                <span className="username">@jessica-anderson-123</span>
            </div>
    </div>
    <div className="details-div">
        <div className="details-div-part-one">
            <div>0 comment</div>
            <div>make character public</div>
        </div>
        <div className="details-div-part-two">
            <div className="more-details">
                <div>Who I Am</div>
            </div>
            <div className="about-me">
                <div className="inside-about-me">
                    <div>About Me</div>
                    <div>Edit</div>
                </div>
                <div>
                    <p>21-years-old anime fantic and yoga instructor. I binge watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat.</p>
                    <p>21-years-old anime fantic and yoga instructor. I binge watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat.</p>
                    <p>21-years-old anime fantic and yoga instructor. I binge watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat.</p>
                    <p>21-years-old anime fantic and yoga instructor. I binge watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat.</p>
                </div>
            </div>

        </div>
    </div>

    </div>    
</div>
  );
};

export default ProfileCard;
