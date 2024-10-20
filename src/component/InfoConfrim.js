import React from 'react'
import { useState, useEffect } from 'react';

const InfoConfrim = () => {
    const [name, setName] = useState('');
    const [nickName, setNickname] = useState('');

    useEffect(() =>{
        console.log('efffect => ', name);
        return(
            console.log('callback => ', name)
        );
    },[]);

    const onChangeName = e =>{
        setName(e.target.value);
    }

    const onChangetNickName = e =>{
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangetNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickName}
                </div>
            </div>
        </div>
    );
}

export default InfoConfrim