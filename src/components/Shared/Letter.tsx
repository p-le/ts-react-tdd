import * as React from 'react';
import styled from 'styled-components';
import { transition, Transition as D3Transition} from 'd3-transition';
import Transition from 'react-transition-group/Transition';
import { easeCubicInOut } from 'd3-ease';
import { select } from 'd3-selection';

export interface ILetterProps {
    datum: string;
    index: number;
    animateDuration: number;
}

interface ILetterState {
    x: number;
    y: number;
    opacity: number;
}

export class Letter extends React.Component<ILetterProps, ILetterState> {
    transition: D3Transition<HTMLElement, {}, null, {}>;
    node: SVGTextElement;

    constructor(props: ILetterProps) {
        super(props);
        this.transition = transition('letter').duration(props.animateDuration / 2).ease(easeCubicInOut);

        this.state = {
            x: 0,
            y: 30,
            opacity: 0,
        };

        this.renderText = this.renderText.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleEnter(node: HTMLElement) {
        const n = select(node);

        this.setState({
            x: this.props.index * 32,
        });

        n.transition(this.transition)
            .style('fill-opacity', 1)
            .attr('y', 60)
            .on('end', () => this.setState({
                y: 60,
                opacity: 1,
            }));
    }

    handleExit(node: HTMLElement) {
        const n = select(node);
        n.transition(this.transition)
            .style('fill-opacity', 0)
            .on('end', () => this.setState({
                opacity: 0,
            }));
    }

    componentWillReceiveProps(nextProps: ILetterProps) {
        if (this.props.index !== nextProps.index) {
            const n = select(this.node);
            n.transition(this.transition)
                .attr('x', nextProps.index * 32)
                .on('end', () => this.setState({
                    x: nextProps.index * 32,
                }));
        }
    }

    renderText(status: string) {
        return (
            <text
                ref={(node) => this.node = node}
                className={`letter letter-${status}`}
                x={this.state.x}
                y={this.state.y}
                style={{fillOpacity: this.state.opacity}}
                fontSize={30}
            >
                { this.props.datum }
            </text>
        );
    }

    render() {
        return (
            <Transition
                in={true}
                appear={true}
                timeout={this.props.animateDuration}
                onEnter={this.handleEnter}
                onExit={this.handleExit}
            >
                { this.renderText }
            </Transition>
        );
    }
}
