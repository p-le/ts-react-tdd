import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { bind } from '../../utils/bind';

interface IPushMenuProps {
    open: boolean;
    handleMenu: () => void;
}

interface ITransitionStyle {
    [key: string]: any;
}

const defaultStyle = {
    width: 500,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate3d(-300px, 0, 0)',
    transition: 'transform 0.3s ease-in-out',
};

const transitionStyles: ITransitionStyle = {
    entering: {
        transform: 'translate3d(0, 0, 0)',
    },
    entered: {
        transform: 'translate3d(0, 0, 0)',
    },
};

export class PushMenu extends React.Component<IPushMenuProps, {}> {

    static defaultProps: Partial<IPushMenuProps> = {
        open: false,
    };

    constructor(props: IPushMenuProps) {
        super(props);
        this.componentOnEnter = this.componentOnEnter.bind(this);
        this.componentOnExit = this.componentOnExit.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        // bind<PushMenu>(['componentOnEnter', 'componentOnExit', 'renderMenu'], this);
    }

    componentOnEnter() {
        document.addEventListener('click', this.props.handleMenu);
    }

    componentOnExit() {
        document.removeEventListener('click', this.props.handleMenu);
    }

    renderMenu(state: string) {
        return (
            <nav
                style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
                <ul>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                    <li>Menu 4</li>
                    <li>Menu 5</li>
                    <li>Menu 6</li>
                </ul>
            </nav>
        );
    }

    render() {
        return (
            <Transition
                in={this.props.open}
                timeout={300}
                onEnter={this.componentOnEnter}
                onExit={this.componentOnExit}
            >
                { this.renderMenu }
            </Transition>
        );
    }
}
