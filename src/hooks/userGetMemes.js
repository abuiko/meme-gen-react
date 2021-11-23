import { useState } from 'react'

function UserGetMemes() {

    const [text, setText] = useState({ topText: "", bottomText: "" })
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const { topText, bottomText } = text



    const handleChange = (event) => {
        const { name, value } = event.target
        setText(prevText => ({ ...prevText, [name]: value }))

    }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const randomNum = Math.floor(Math.random() * allImgs.length)
    //     const random = allImgs[randomNum].url
    //     setRandomImg(prevRandom => {
    //         return {
    //             ...prevRandom, random
    //         }
    //     })
    // }


    return { topText, bottomText, randomImg, handleChange }
}

export default UserGetMemes

