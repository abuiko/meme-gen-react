import React, { Fragment } from 'react'
import Header from "./Header"

const FindMeme = () => {
    return (
        <Fragment>
            <Header />
            <form>
                <input
                    type="text"
                    onChange=""
                    placeholder="Search memes..."
                />
                <button>Click</button>
            </form>
        </Fragment>
    )
}

export default FindMeme