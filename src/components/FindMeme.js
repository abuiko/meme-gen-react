import React from 'react'
import UserGetMemes from "../hooks/userGetMemes"


const FindMeme = () => {
    const { allImgs } = UserGetMemes()

    return (
        <div className="findMeme">
            <div className="findMeme_container">
                <form className="findMeme_form">
                    <input
                        className="findMeme_input"
                        type="text"
                        onChange=""
                        placeholder="Search memes..."
                    />
                    <button className="findMeme_btn">Click</button>
                </form>
                <div className="findMeme_gallery">
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" />
                </div>

            </div>
        </div>



    )
}

export default FindMeme