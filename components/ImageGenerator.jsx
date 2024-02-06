'use client'
import React, { useRef, useState } from 'react'
import default_image from '../assets/homepic.png'
import Image from 'next/image'
import 'dotenv/config'
const ImageGenerator = () => {
  const stringa = `Bearer ${process.env.OPENAI_API_KEY}`
  const [image_url, setImage_url] = useState('/')
  let inputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const imageGenerator = async () => {
    if (inputRef.current.value === '') {
      return 0
    }
    setLoading(true)
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: stringa,
          'User-Agent': 'Chrome',
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: '512x512',
        }),
      }
    )
    let data = await response.json()
    console.log(data)
    let data_array = data.data
    setImage_url(data_array[0].url)
    setLoading(false)
  }

  return (
    <div className="ai-image-generator text-center">
      <a href="/">
        <div className="header text-3xl ">
          Ai image <span> generator</span>
        </div>
      </a>
      <div className="img-loading">
        <div className="image">
          <Image
            width={512}
            height={512}
            src={image_url === '/' ? default_image : image_url}
            alt="default"
          />
        </div>
        <div className="loading">
          <div className={loading ? 'loading-bar-full' : 'loading-bar'}>
            {/* <div className={loading ? 'loading-text' : 'display-none'}>
              Loading....
            </div> */}
          </div>
        </div>
      </div>
      <div className="search-box m-auto flex flex-row justify-between lg:w-[40%] max-w-screen-sm">
        <input
          type="text"
          ref={inputRef}
          className="search-input text-white ml-5 lg:text-xl placeholder:text-base "
          placeholder="Describe your desired image"
        />
        <div
          className="generate-btn p-6"
          onClick={() => {
            imageGenerator()
          }}
        >
          Generate
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator
