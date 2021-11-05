import React from 'react'

const MemeGenerator = () => {
    return (
        <div>
            <div className="img-container">
                <img className="img" src={this.state.randomImg} alt="random " />
                <p className="topText">{this.state.topText}</p>
                <p className="bottomText">{this.state.bottomText}</p>
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
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Generate</button>
                </div>

            </form>
        </div>
    )
}

export default MemeGenerator
