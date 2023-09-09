import { useState, useEffect } from 'react'

// showing이 참일때
// im here이 hello() 컴포넌트에서 실행되고 콘솔에 찍히고 있다.
// showing이 거짓일때
// im here이 hello() 컴포넌트에서 destroy되면서 없어진다.(삭제된다.)
// ** 참고
// useEffect(() => something(), [변수A]) 라고하면, 변수A가 변경될 떄 마다 useEffect는 실행된다. 변수A가 변경되면,
// 이전의 변수A 값을 가지고 return 함수가 실행된다.
// ex) 변수A =1 ->2 변경되는 시점에서 , useEffect()에서 return 외에는 변수A는 2이고, return 상황에서는 변수A는 1이다.
// 뒤에 [ dependency ]에 아무것도 없다면( ex) [] ) 첫 렌더링시에 실행되고, return은 컴포넌트 unmount시(영상의 destroy시) 실행된다.
// 부모 컴포넌트 위에 자식컴포넌트가 있듯이 AppCleanUp 컴포넌트위에 Hello 컴포넌트가 쌓였고 이 쌓인 컴포넌트가 destroy될대 return값을 반환한다.
function Hello() {
  //   function byeFn() {
  //     console.log('bye')
  //   }

  //   function hiFn() {
  //     console.log('hi')
  //     return byeFn
  //   }
  //   useEffect(hiFn, [])
  // 위 주석친 3문장이 아래의 useEffect와 같다
  useEffect(() => {
    console.log('im here')
    return () => console.log('im destroy') //destroy되면서 실행되는 구문
  }, [])
  return <h1>Hello</h1>
}

// npm i prop-types 설치하기
function AppCleanUp() {
  const [showing, setShowing] = useState(false)
  const onClick = () => {
    setShowing((prev) => !prev)
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default AppCleanUp
