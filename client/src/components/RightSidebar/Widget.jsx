import React from 'react'

import './RightSidebar.css'
import linklogo from '../../assets/link-solid.svg'


const Widget = () => {
    return (
        <div className='widget'>
            <h3>Useful Links</h3>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://iitg-ai-society.vercel.app/coursePage" target="_blank" rel="noreferrer">IITG.ai ML Course Page</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://www.youtube.com/playlist?list=PLvn6INz6zAjryyM2avJdheots1BJFwtRY" target="_blank" rel="noreferrer">Algomaniacs</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://linktr.ee/codingclubiitg" target="_blank" rel="noreferrer">Coding Club Linktree</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://github.com/the-hyp0cr1t3/CC" target="_blank" rel="noreferrer">CP Resources</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://www.iitg.ac.in/acad/academic_calender.php" target="_blank" rel="noreferrer">Academic Calendar</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://codeforces.com/" target="_blank" rel="noreferrer">Codeforces</a>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={linklogo} alt="link" width='18'/>
                    <a href="https://atcoder.jp/" target="_blank" rel="noreferrer">Atcoder</a>
                </div>
            </div>
            
        </div>
    )
}

export default Widget
