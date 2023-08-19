import React from 'react'

const WidgetTags = () => {

    const tags = ['cpp', 'javascript',  'express', 'firebase', 'machine-learning', 'git', 'java', 'competitive-programming','mern','mongodb','mysql','node.js','python','reactjs']

    return (
        <div className='widget-tags'>
            <h4>Frequent tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default WidgetTags
