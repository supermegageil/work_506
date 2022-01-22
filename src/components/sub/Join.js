import { useEffect, useRef, useState } from "react";

function Join(){
  
  const initVal={
    userid : '',
    pwd1 : '',
    pwd2 : '',
    email: '',
    comments: '',
    gender: '',
    interests: '',
    edu: ''
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {   
    const {name, value} = e.target;     
    setVal({...val, [name]: value});     
  }

  const handleCheck = e => {    
    const {name} = e.target;  
    const isCheck = e.target.checked;   
    setVal({...val, [name]: isCheck});  
  }

  const handleSelect = e => {
    const {name} = e.target;
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({...val, [name]: isSelected});
  }


  const handleSubmit = e =>{ 
    e.preventDefault();   
    setIsSubmit(true);
    setErr(check(val));  
    console.log(val);
  }


  const check = val=>{
    let errs = {};  
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    if( !val.userid || val.userid.length <5 ){
      errs.userid='아이디 5글자 이상 입력하세요';
    } 
    if( !val.pwd1 || val.pwd1.length<5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)){
      errs.pwd1='비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함해야 합니다';
    }
    if( !val.email || val.email.length <8 || !/@/.test(val.email) ){
      errs.email='이메일주소를 8글자 이상입력 하세요';
    }
    if( !val.pwd2 || val.pwd1 !== val.pwd2 ){
      errs.pwd2='두개의 비밀번호를 동일하게 입력하세요';
    }
    if( !val.comments || val.comments.length <10 ){
      errs.comments='남기는말을 10글자 이상입력 하세요';
    }
    if( !val.gender ){
      errs.gender='성별을 선택하세요';
    }
    if( !val.interests ){
      errs.interests='관심사를 하나이상 선택하세요.';
    }
    if( !val.color ){
      errs.color='좋아하는 색을 선택해주세요.'
    }
    return errs;
  }
 
  useEffect(()=>{        
    console.log(err);
    const len =  Object.keys(err).length;
    if(len === 0 && isSubmit){
      console.log('인증 성공');
      setSuccess(true);     
    }else{
      console.log('인증 실패');
      setSuccess(false);
    }
  },[err]);

  return (
    <main className='join'>
      <div className="join__inner">
        <div className="join__top__txt">
          <h1>Join</h1>
        </div>
      

        {success ? <div>회원가입을 축하합니다.</div> : null }

        <form onSubmit={handleSubmit} >
          <fieldset>       

            <table>              
              <tbody>
                {/* userid */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="userid">USER ID</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='userid'
                      name='userid'
                      placeholder='아이디를 입력하세요'                    
                      onChange={handleChange}
                    />
                    <span className='err'>{err.userid}</span>
                  </td>
                </tr> 

                {/* password */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd1">PASSWORD</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd1'
                      name='pwd1'
                      placeholder='비밀번호를 입력하세요'                  
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd1}</span>
                  </td>
                </tr>

                {/* re password */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd2">RE-PASSWORD</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd2'
                      name='pwd2'
                      placeholder='비밀번호를 재입력하세요'                  
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd2}</span>
                  </td>
                </tr>

                {/* email */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="email">E-MAIL</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='email'
                      name='email'
                      placeholder='이메일 주소를 입력하세요'         
                      onChange={handleChange}
                    />
                    <span className='err'>{err.email}</span>
                  </td>
                </tr>

                {/* comments */}
                <tr>
                  <th scope='row'>
                    <label htmlFor="comments">COMMENTS</label>
                  </th>
                  <td>
                    <textarea
                      col='30'
                      row='10'
                      id='comments'
                      name='comments'
                      placeholder='글을 남겨주세요'                  
                      onChange={handleChange}
                    ></textarea>
                    <span className='err'>{err.comments}</span>
                  </td>
                </tr>

                {/* gender */}
                <tr>
                  <th scope='row'>
                    GENDER
                  </th>
                  <td>
                    <label htmlFor='male'>Male</label>
                    <input 
                      type="radio" 
                      id='male' 
                      name='gender' 
                      onChange = {handleCheck}
                    />

                    <label htmlFor='female'>Female</label>
                    <input 
                      type="radio" 
                      id='female' 
                      name='gender' 
                      onChange = {handleCheck} 
                    />

                    <span className='err'>{err.gender}</span>
                  </td>
                </tr>

                {/* interests */}
                <tr>
                  <th scope='row'>
                    INTERESTS
                  </th>
                  <td>
                    <label htmlFor='shopping'>Shopping</label>
                    <input 
                      type="checkbox" 
                      id='sports' 
                      name='interests' 
                      onChange = {handleCheck}
                    />

                    <label htmlFor='work'>Work</label>
                    <input 
                      type="checkbox" 
                      id='music' 
                      name='interests' 
                      onChange = {handleCheck} 
                    />

                    <label htmlFor='travel'>Travel</label>
                    <input 
                      type="checkbox" 
                      id='game' 
                      name='interests' 
                      onChange = {handleCheck} 
                    />

                    <label htmlFor='dance'>Dance</label>
                    <input 
                      type="checkbox" 
                      id='dance' 
                      name='interests' 
                      onChange = {handleCheck} 
                    />

                    <span className='err'>{err.interests}</span>
                  </td>
                </tr>

                {/* education */}
                <tr>
                  <th scope='row'>
                  <label htmlFor='edu'>YOUR LOCATION</label>
                  </th>
                  <td>                    
                    <select name="location" id="location" onChange={handleSelect}>
                      <option value="">지역을 선택하세요</option>
                      <option value="seoulnorth">서울 북부</option>
                      <option value="seoulsouch">서울 남부</option>
                      <option value="geonggido">경기도</option>
                      <option value="busan">부산</option>
                    </select>
                    <span className='err'>{err.edu}</span>
                  </td>
                </tr>

                {/* btn set */}
                <tr>
                  <th colSpan='2' className='btnSet'>
                    <input type="reset" value='CANCEL' />
                    <input type="submit" value='SEND' />
                  </th>
                </tr> 
              </tbody>       
            </table>
          </fieldset>
        </form>
      </div>
    </main>
  )
}

export default Join;
