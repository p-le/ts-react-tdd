import * as React from 'react';
import { interval, Timer } from 'd3-timer';
import { shuffle } from 'd3-array';
import { Letter } from './Letter';

interface IAlphabetState {
    alphabet: string[];
}

export class Alphabet extends React.Component<{}, IAlphabetState> {
    letters: string[];
    state: IAlphabetState;
    interval: any;

    constructor() {
        super();
        this.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.state = {
            alphabet: [],
        };
        this.updateAlphabet = this.updateAlphabet.bind(this);
    }

    updateAlphabet() {
        this.setState({
            alphabet: shuffle<string>(this.letters)
                .slice(0, Math.floor(Math.random() * this.letters.length)).sort(),
        });
    }

    componentWillMount() {
        this.interval = setInterval(() => this.updateAlphabet(), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const letters = this.state.alphabet.map((datum, index) =>
            <Letter datum={datum} key={`letter-${datum}`} index={index} animateDuration={1500} />
        );

        return (
            <g>
                { letters }
            </g>
        );
    }
}
