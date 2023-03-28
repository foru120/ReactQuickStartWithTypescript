import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import produce from 'immer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let quiz = {
  "students" : ["홍길동", "성춘향", "박문수", "변학도"],
  "quizlist": [
    {
      "question": "한국 프로 야구팀이 아닌 것은?",
      "options": [
        { "no":1, "option": "삼성 라이온즈" },
        { "no":2, "option": "기아 타이거즈" },
        { "no":3, "option": "두산 베어스" },
        { "no":4, "option": "LA 다저스" },
      ],
      "answer": 4
    },
    {
      "question": "2018년 크리스마스는 무슨 요일인가?",
      "options": [
        { "no":1, "option": "월" },
        { "no":2, "option": "화" },
        { "no":3, "option": "수" },
        { "no":4, "option": "목" },
      ],
      "answer": 2
    }
  ]
}

const quiz2 = produce(quiz, draft => {
  draft.quizlist[0].options[0].option = "LG트윈스";
});

console.log(quiz === quiz2);
console.log(quiz.quizlist === quiz2.quizlist);
console.log(quiz.quizlist[0] === quiz2.quizlist[0]);
console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0]);
console.log(quiz.quizlist[0].options[0].option === quiz2.quizlist[0].options[0].option);
console.log(quiz.students === quiz2.students);