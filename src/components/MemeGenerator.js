import React, { Fragment } from 'react'

const MemeGenerator = props => {
    return (
        <Fragment>
            <div className="img-container">
                <img className="img" src={props.randomImg} alt="random meme" />
                <p className="topText">{props.topText}</p>
                <p className="bottomText">{props.bottomText}</p>
            </div>
            <form>
                <div className="form-container">
                    <div className="range-input">
                        <input type="range" />
                        <input type="range" />
                    </div>
                    <input
                        type="text"
                        name="topText"
                        value={props.topText}
                        placeholder="Top Text"
                        onChange={props.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={props.bottomText}
                        placeholder="Bottom Text"
                        onChange={props.handleChange}
                    />
                    <button onClick={props.handleClick}>Generate</button>
                </div>
            </form>
        </Fragment>
    )
}

export default MemeGenerator
