import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1
    const navigate = useNavigate()

    var questionsList = [{ 
        id: 1,
        votes: 5,
        noOfAnswers: 2,
        questionTitle: "First question",
        questionBody: "Question description",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "Sonu",
        askedOn: "Aug 19",

    },{ 
        id: 2,
        votes: 6,
        noOfAnswers: 0,
        questionTitle: "Second question",
        questionBody: "Question description",
        questionTags: ["ML", "python"],
        userPosted: "Kumar",
        askedOn: "Aug 20",
    },{ 
        id: 3,
        votes: 4,
        noOfAnswers: 0,
        questionTitle: "Third question",
        questionBody: "Question description",
        questionTags: ["python"],
        userPosted: "Shaw",
        askedOn: "Aug 20",

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
