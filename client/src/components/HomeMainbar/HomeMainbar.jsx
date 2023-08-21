import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1
    const navigate = useNavigate()

    var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "Question 1",
        questionBody: "Question Desc",
        questionTags: ["java", "node js", "react js"],
        userPosted: "sonu",
        userId: 1,
        askedOn: "Aug 19",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'sonu',
            answeredOn: "Aug 19",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "Question 2",
        questionBody: "Question Desc",
        questionTags: ["java", "node js", "react js"],
        userPosted: "sonu",
        userId: 1,
        askedOn: "Aug 19",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'sonu',
            answeredOn: "Aug 19",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "Question 3",
        questionBody: "Question Desc",
        questionTags: ["java", "node js", "react js"],
        userPosted: "sonu",
        userId: 1,
        askedOn: "Aug 19",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'sonu',
            answeredOn: "Aug 19",
            userId: 2,
        }]
    }]

    const checkAuth = () => {
      if(user === null){
          alert("Login or Sign up first to ask a Question")
          navigate('/Auth')
      }else{
          navigate('/AskQuestion')
      }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ questionsList.length } questions</p>
                        <QuestionList questionsList={questionsList} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar
