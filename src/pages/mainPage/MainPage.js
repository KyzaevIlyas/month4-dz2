import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import List from "../list/List";


const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']

    const todoList = [
        {
                id:1 ,
                title: 'coding',
               completed: false
            },
            {
                id:2,
                title: 'eat',
               completed: false
            },
            {
                id:3,
                title: 'sleep',
               completed: false
            }
    ]
    // let show = false
    // console.log(show, 'start');
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow');
    const handleShow = () => {
        // show = true
        // console.log(show, ' end');
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}>
                </Modal>
            }

            <Buttons/>
            <button onClick={handleShow}>Открыть</button>
            <List data={todoList}/>
        </>
    );
};

export default MainPage;