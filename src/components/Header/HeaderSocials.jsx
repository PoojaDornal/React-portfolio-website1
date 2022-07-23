import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkdin.com' target="__blank" ><BsLinkedin/></a>
        <a href='https://github.com' target="__blank" ><FaGithub /></a>
        {/* <a href='https://linkdin.com' target="--blank" ></a> */}

    </div>
  )
}
