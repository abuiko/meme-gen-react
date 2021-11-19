import { useState, useEffect } from 'react'

function UserGetMemes() {

    const [text, setText] = useState({ topText: "", bottomText: "" })
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allImgs, setAllImgs] = useState([])
    const { topText, bottomText } = text



    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                setAllImgs(prevImgs => [...prevImgs, memes])
            })
    })


    const handleChange = (event) => {
        const { name, value } = event.target
        setText(prevText => ({ ...prevText, [name]: value }))

    }

    const handleClick = (e) => {
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * allImgs.length)
        const random = allImgs[randomNum].url
        setRandomImg(prevRandom => ({ ...prevRandom, random }))
    }


    return { topText, bottomText, randomImg, handleChange, handleClick }
}

export default UserGetMemes

