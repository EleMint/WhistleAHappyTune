import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Foot className="reference">
            <div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" target="_blank" rel={"noreferrer"} title="Itunes logo of amusical note inside a circle">Itunes logo of amusical note inside a circle</a> from <a href="https://www.flaticon.com/" target="_blank" rel={"noreferrer"} title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel={"noreferrer"}>CC 3.0 BY</a></div>
        </Foot>
    )
}

const Foot = styled.footer`
    text-align: left;
	position: fixed;
	bottom: 0;
	right: 5px;
	font-size: 10px;
`
