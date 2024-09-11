/* eslint-disable */

import './App.css';
import { useState } from 'react';

// App.JS 안에서 사용하는 문법은 Javascript 가 아닌 JSX 문법

// 특징1  : Class를 넣을때 Class가 아닌 ClassName으로 선언해야한다.

// 특징2 : 변수넣을 땐 {중괄호} 로 넣어야한다.

// 특징3 : style 넣을 땐 style={}


function App() {

  // 자료 잠깐 저장할 땐 변수 (var, let, const)
  let post = '강남 우동 맛집'

  // State는 html 을 자동으로 재 렌더링 해서 쓰는거다
  // a 는 state 에 보관한 자료, b 는 state를 변경할때 쓰는 함수
  let [글제목 , 글제목변경]= useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('');
  

  let num = [1,2];
  let [a,c] = [1,2];

  // Let a = num[0];
  // Let c = num[1];

  

  return (
    <div className="App">
        <div className="black-nav">
          <h4 style={ {color:'white', fontSize: '20px'} }>블로그임</h4>
        </div>
        <div className='list'>

          <button>가나다순정렬</button>
          
          <button onClick={ ()=>{

            let copy = [...글제목];
            copy[0] = '여자 코트 추천'
            글제목변경(copy)
            }}>버튼</button>

          {/* <h4>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
          <p>9월 8일 발행</p>
          <h4>{ 글제목[1] }</h4>
          <p>9월 9일 발행</p>
          <h4 onClick={()=>{ setModal(true) }}>{ 글제목[2] }</h4>
          <p>9월 10일 발행</p> */}
        </div> 

        {
          글제목.map(function(a, i){
            return (
              <div className='list' key={i}>
                <h4 onClick={()=>{setModal(true); setTitle(i)}}>
                  { 글제목[i]}
                <span onClick={(e)=>{ 
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)  
                  }}>👍</span> {따봉[i]} 
                </h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy=[...글제목];
                  //copy 여기서 원하는 자료 삭제
                  copy.splice(i, 1);
                  글제목변경(copy)
                }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e)=>{ 입력값변경(e.target.value); 
          console.log(입력값)
          }}/>
        <button onClick={()=>{
          let copy =[...글제목];
          // copy 맨처음에 유저가 입력 한글 추가
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글발행</button>

        {/* 컴포넌트 부르기 */}
        {
          modal == true ?  <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
        }
    </div>
  );
}

//컴포넌트
function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{ props.글제목변경(['여자코트 추천', '강남맛집추천', '파이썬독학'])}}>글수정</button>
  </div>
  )
}

const hi = ()=>{
  return(
    <div>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
