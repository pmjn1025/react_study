import { useState } from 'react'

// npm i prop-types 설치하기
function TodoApp1() {
  const [toDo, setToDo] = useState('')
  // useState를 배열로 추가하는 법
  const [toDos, setToDos] = useState([])
  const onChange = (event) => {
    setToDo((current) => event.target.value)
  }
  console.log(toDo)

  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') {
      return
    }
    // 절대로 바닐라 JS에서 했던것처럼 직접 배열을 선언해서 하나 하나씩 관리하지 않는다.
    // 거의 대부분 useState를 사용해서 수정자(setVariable)를 이용해서 관리한다.
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo('')
  }
  // 배열 안에 있는 요소를 하나의 컴포넌트로 만들어서 출력하고 싶다.
  console.log(toDos)

  // 복습 : html에서 <form>태그안에 button이 있으면 자동적으로 submit하게되어있다.
  // .map()은 하나의 array에 있는 item들을 내가 원하는 무엇이든지 바꿔주고
  // 바뀐 새로운 array를 반환 한다.
  // 현재 아이템을 가져올수 있다.
  // map에 list형식으로 출력하려면 unique한 key값을 넣어주야 한다.
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write your todo"
          onChange={onChange}
          value={toDo}
        />
        <button>Add toDo</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp1
