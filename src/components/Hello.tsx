import * as React from 'react';

interface IProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: IProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>;
