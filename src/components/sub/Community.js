import React from 'react';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';



function Community() {
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/faq.json`;
    let [lists, setLists] = useState([]);
    const faqBox = useRef(null);
    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                setLists(json.data.data)
            })

    }, [])

    const frame = useRef(null);
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);

    const getLocalItems = () => {
        let data = localStorage.getItem('posts');

        if (data) {
            return JSON.parse(data);
        } else {
            return [
                { title: 'Hey', content: 'es ist wahnsinn' },
                { title: 'Hallo', content: 'Lange nichts mehr von Dir gehört' },
                { title: 'Na du', content: 'Wie schön' },
                { title: 'tada', content: 'hier bin ich endlich.' }
            ];
        }
    }
    const [posts, setPosts] = useState(getLocalItems);


    const createPost = () => {
        if (!input.current.value || !textarea.current.value) {
            alert('제목과 본문을 입력하세요');
            return;
        }
        setPosts([
            {
                title: input.current.value,
                content: textarea.current.value
            }
            , ...posts
        ]);

        input.current.value = '';
        textarea.current.value = '';
    }

    const deletePost = index => {
        setPosts(
            posts.filter((_, postIndex) => postIndex !== index)
        )
    }

    const enableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = true;
                return post;
            })
        )
    }

    const disableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = false;
                return post;
            })
        )
    }

    const updatePost = index => {
        if (!updateInput.current.value || !updateTextarea.current.value) {
            alert('제목과 본문을 모두 입력하세요.');
            return;
        }
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) {
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
        frame.current.classList.add('on');
    }, [posts]);

    return (
        <main className="community" ref={frame}>
            <div className="community__inner">
                <div className="community__top__txt">
                    <h1>Community</h1>
                </div>
            </div>

            <div className="community__wrap">
             
                    <article>
                        {
                            lists.map((data, index) => {
                                return (
                                    <details className="question" key={index}>
                                        <summary className="title">{data.title}</summary>
                                        <div className="answer" >
                                            {data.content}
                                        </div>
                                    </details>
                                )
                            })
                        }
                    </article>
                

            
                <section className='inputBox'>
                    <input type="text"
                        placeholder='Title' ref={input} />

                    <textarea name="" id="" resize="" ref={textarea}>
                    </textarea>

                    <div className='inputBtns'>
                        <button onClick={() => {
                            input.current.value = '';
                            textarea.current.value = '';
                        }}>CANCEL</button>
                        <button onClick={createPost}>CREATE</button>
                    </div>
                </section>
                <section className="showBox" ref={showBox}>
                    {
                        posts.map((post, index) => {
                            return (
                                <article key={index}>
                                    {
                                        post.enableUpdate
                                            ?
                                            //수정//
                                            <>
                                                <div className="post">
                                                    <input type="text" defaultValue={post.title} ref={updateInput} />
                                                    <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => updatePost(index)}>입력</li>
                                                    <li onClick={() => disableUpdate(index)}>취소</li>
                                                </ul>
                                            </>
                                            :
                                            
                                            <>
                                                <div className="post">
                                                    <h2>{post.title}</h2>
                                                    <p>{post.content}</p>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => enableUpdate(index)}>수정</li>
                                                    <li onClick={() => deletePost(index)}>삭제</li>
                                                </ul>
                                            </>
                                    }
                                </article>
                            )
                        })
                    }
                </section>
                
            </div>
            
        </main>
    )
}

export default Community;
