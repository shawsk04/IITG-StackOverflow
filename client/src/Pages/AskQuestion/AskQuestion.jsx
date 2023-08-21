import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
    
    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a Question to the Campus Junta</h1>
                <form>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h3>Title</h3>
                            <p>Be specific and avoid long titles</p>
                            <input type="text" id='ask-ques-title' placeholder='Are there any ongoing projects for contribution in SWC?'/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h3>Body</h3>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h3>Tags</h3>
                            <p>Add up to 5 tags (for multiword tags use '-' in between the words) </p>
                            <input type="text" id='ask-ques-tags' placeholder='e.g. (python machine-learning)'/>
                        </label>
                    </div>
                    <input type="submit" value='Reivew your question' className='review-btn'/>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion
