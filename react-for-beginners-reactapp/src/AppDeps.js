import { useState, useEffect } from 'react'

// npm i prop-types 설치하기
function AppDeps() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => {
    setValue((prev) => prev + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  // 일반문장
  //console.log('i run all the time')

  // 일반문장에 useEffect를 씌웠다고 생각!
  useEffect(() => {
    console.log('i run only once')
  }, [])

  // 서칭시 (onChange)에도 아래 return부분이 리렌더링 되면서 함수를 실행시키고
  // 클릭할때도 마찬가지로 return부분이 리렌더링 되면서 함수를 실행시킨다.
  // 불필요 한 작동을 계속하고 있다.
  // 따라서 서칭시에는 onChange이벤트만 실행시키고
  // 클릭시에는 onClick이벤트만 실행시키고 싶다.
  //console.log('Search for', keyword)

  // deps : 저 배열문안에 있는 변수가 변할때만 실행시킨다.(keyword는 검색문)
  // 지금 여기서는 if문을 주어서 변수의 값이 변할 때 조건에 따라서 실행시킨다.
  useEffect(() => {
    // if (keyword !== '' && keyword.length > 5) {
    //   console.log('Search for', keyword)
    // }
    console.log('i run when keyword change', keyword)
  }, [keyword])

  useEffect(() => {
    console.log('i run when counter change', counter)
  }, [counter])

  // keyword나 counter 둘중에 하나의 값만 바뀌어도 실행됨
  useEffect(() => {
    console.log('i run when keyword&counter change', counter)
  }, [keyword, counter])

  return (
    <div>
      <h1>AppEffect</h1>
      <input
        type="text"
        placeholder="Seacrch Here"
        onChange={onChange}
        value={keyword}
      ></input>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default AppDeps
