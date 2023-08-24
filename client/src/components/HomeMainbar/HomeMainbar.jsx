import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const user = useSelector((state) => state.currentUserReducer)

    const questionsList = useSelector(state => state.questionsReducer)


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
                        <p>{ questionsList.data.length } questions</p>
                        <QuestionList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar
