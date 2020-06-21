import React,{ Component } from 'react';
import "../assets/style.css";
import quizService from '../quizService';
import QuestionBox from '../components/QuestionBox';

class Quiz extends Component{

    state={
        questionBank : [],
        previousquestionBank:[],
        score: 0,
        responses: 0
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
            
               questionBank:question,
               previousquestionBank : this.state.questionBank
            });
        });
    };

    
    computeAnswer = (answer,correctAnswer) => {
        if(answer === correctAnswer)
        {
            this.setState({
                score : this.state.score + 1
            });
        }
    }
    nextQuestionList = e => {
       this.getQuestions();
    }

    previousQuestionList = () => {
          this.setState({previousquestionBank:this.state.questionBank});
          this.setState({questionBank:this.state.previousquestionBank});
    
    }


    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                <div className="title">Questions</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question,answers,correct,questionId}) => (
                    <QuestionBox 
                       question={question}
                       options={answers}
                       key={questionId}
                       selected={answer => this.computeAnswer(answer,correct)}
                    />
                ))}
                <button onClick={this.previousQuestionList} className="primaryBtn">Previous</button>
                <button onClick={this.nextQuestionList} className="secondaryBtn">Next</button>
            </div>
        )
    }
}

export default Quiz;