import React from 'react'

interface Props{
   buttonAction:() => void
   buttonValue: string
}

export const TimerButton: React.FC<Props> = ({buttonAction,buttonValue}) => {
    return (
        <div>
            <button onClick={buttonAction}>{buttonValue}</button>
        </div>
    )
}
