import React, { Fragment } from 'react'
import UserGetMemes from "../hooks/userGetMemes"

const MemeGenerator = () => {
    const { topText, bottomText, randomImg, handleChange } = UserGetMemes()
    return (
        <Fragment>
            <div className="img-container">
                <img className="img" src={randomImg} alt="random meme" />
                <p className="topText">{topText}</p>
                <p className="bottomText">{bottomText}</p>
            </div>
            <form className="memeGenerator_form">
                <div className="form-container">
                    <div className="range-input">
                        <input type="range" />
                        <input type="range" />
                    </div>
                    <input
                        className="memeGenerator_input"
                        type="text"
                        name="topText"
                        value={topText}
                        placeholder="Top Text"
                        onChange={handleChange}
                    />
                    <input
                        className="memeGenerator_input"
                        type="text"
                        name="bottomText"
                        value={bottomText}
                        placeholder="Bottom Text"
                        onChange={handleChange}
                    />
                    <button
                        className="memeGenerator_btn"

                    >Generate</button>
                </div>
            </form>
        </Fragment>
    )
}

export default MemeGenerator
