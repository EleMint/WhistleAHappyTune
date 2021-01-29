import React from 'react';
import styled from 'styled-components';

type ExplicitProps = {
    isExplicit: boolean;
    setIsExplicit: React.Dispatch<React.SetStateAction<boolean>>
}

export const Explicit = ({ isExplicit, setIsExplicit }: ExplicitProps) => {
    const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setIsExplicit(event.target.value === "yes")

    return (
        <RadioButtonContainer>
            <div>Explicit:</div>
            <RadioButton
                id="No"
                isSelected={!isExplicit}
                value="no"
                changed={event => onRadioChange(event)}
            />
            <RadioButton
                id="Yes"
                isSelected={isExplicit}
                value="yes"
                changed={event => onRadioChange(event)}
            />
        </RadioButtonContainer>
    )
}

const RadioButtonContainer = styled.div`
    display: inline-flex;

    label {
        padding-left: 5px;
        padding-bottom: 2px;
    }
`

type RadioButtonProps = {
    id: string;
    isSelected: boolean;
    value: string;
    changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = (props: RadioButtonProps) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.value}</label>
            <input
                id={props.id}
                type="radio"
                value={props.value}
                checked={props.isSelected}
                onChange={props.changed}
            />
        </div>
    )
}
