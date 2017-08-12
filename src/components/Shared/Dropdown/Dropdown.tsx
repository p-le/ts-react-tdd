import * as React from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

interface IDropdownProps {
    isTransparent?: boolean;
    triggerFn: () => void;
}

interface IDropdownState {
    isShow: boolean;
}

interface IDropdownContentProps {
    className?: string;
    state: string;
    isShow: boolean;
}

const DropdownWrapper = styled.div`
`;

const DropdownContent: React.SFC<IDropdownContentProps> = props => (
    <div className={props.className}>
        { props.children }
    </div>
);

const DropdownTrigger = styled.button`
    background-color: papayawhip;
    appearance: none;
    box-shadow: none;
    outline: none;
    color: palevioletred;
    padding: 0.9rem 1.4rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
`;

const DropdownContentItem = styled.a`
    padding: 0.9rem 1.4rem;
    color: palevioletred;
    font-size: 1.3rem;
    cursor: pointer;
    display: block;

    &:hover {
        background-color: rgba(0, 0, 0, .05);
    }
`;

const StyledDropdownContent = styled(DropdownContent)`
    display: block;
    opacity: ${props => props.isShow ? 1 : 0};
    height: ${props => props.isShow ? 'auto' : 0};
    box-shadow: ${props => props.theme.shadow};
    position: absolute;
    min-width: 10rem;
    z-index: 1;
    transition: height 0.4s ease, opacity 0.4s ease;
`;

export class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
    constructor(props: IDropdownProps) {
        super(props);
        this.state = {
            isShow: false,
        };
        this.handleTrigger = this.handleTrigger.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    handleShow() {
        this.setState({
            isShow: !this.state.isShow,
        });
    }

    handleTrigger() {
        this.props.triggerFn();
        this.handleShow();
    }

    handleEnter() {
        document.addEventListener('click', this.handleShow);
    }

    handleExit() {
        document.removeEventListener('click', this.handleShow);
    }

    renderContent(state: string) {
        return (
            <StyledDropdownContent isShow={this.state.isShow} state={state}>
                <DropdownContentItem>Link 1</DropdownContentItem>
                <DropdownContentItem>Link 2</DropdownContentItem>
                <DropdownContentItem>Link 3</DropdownContentItem>
            </StyledDropdownContent>
        );
    }

    render() {
        return (
            <DropdownWrapper>
                <DropdownTrigger onClick={this.handleTrigger}>Dropdown</DropdownTrigger>
                <Transition
                    in={this.state.isShow}
                    timeout={400}
                    onEnter={this.handleEnter}
                    onExit={this.handleExit}
                >
                    { this.renderContent }
                </Transition>
            </DropdownWrapper>
        );
    }
}
