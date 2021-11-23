import React from 'react'
import { useState, useEffect } from 'react'



const FindMeme = () => {

    const [allImgs, setAllImgs] = useState([])


    const url = "https://api.imgflip.com/get_memes"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllImgs(data.data.memes))
    }, [])

    console.log(allImgs[0])


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
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme1" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme2" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme3" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme4" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme5" />
                    <img className="findMeme_img" src="http://i.imgflip.com/1bij.jpg" alt="meme6" />
                </div>

            </div>
        </div>



    )
}

export default FindMeme