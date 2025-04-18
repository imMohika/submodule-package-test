"use client";
import {useUltimateAnswer} from "starter-lib/react";

export const Answer = () => {
    const {answer} = useUltimateAnswer()

    return <p>Answer is {answer.current}</p>
}
