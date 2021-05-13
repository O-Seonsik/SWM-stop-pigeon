import React, { useState, useEffect } from "react";
import './ActionGroup.css'
import ActionDivider from './ActionDivider';
import ActionButton from './ActionButton';
import icon_stop from 'data/image/icon_stop.svg';
import icon_docs from 'data/image/icon_docs.svg';
import attack_sound from 'data/audio/pigeon_attack_sound.mp3';

const useAudio = attack_sound => {
    const [audio] = useState(new Audio(attack_sound));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

function reportPigeon() {
    console.log("비둘기 민원 접수하기 클릭");
    window.open("https://eungdapso.seoul.go.kr/Req/Req02/Req02_not1.jsp");
}

function ActionGroup() {
    const [playing, toggle] = useAudio(attack_sound);

    return (
        <div id="action-group">
            <ActionButton
                icon={icon_stop}
                name={playing ? "소리 멈추기" : "비둘기 쫓기"}
                onClickEvent={toggle}
            />
            <ActionDivider />
            <ActionButton
                icon={icon_docs}
                name="비둘기 민원 접수하기"
                onClickEvent={reportPigeon}
            />
        </div>
    );
}

export default ActionGroup;