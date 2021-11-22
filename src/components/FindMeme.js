import React from 'react'


const FindMeme = () => {
    return (

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

        </div>


    )
}

export default FindMeme