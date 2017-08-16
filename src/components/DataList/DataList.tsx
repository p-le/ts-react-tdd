import * as React from 'react';
import styled from '../../utils/styled-components';

const Table = styled.table`
    display: table;
    font-size: 0.8rem;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
`;
const Th = styled.th`
    border: none;
    border-radius: 0;
    padding: .5rem .2rem;
    text-align: left;
    vertical-align: middle;
    border-radius: .1rem;
`;
const Td = styled.td`
    border: none;
    border-radius: 0;
    padding: .5rem .2rem;
    text-align: left;
    vertical-align: middle;
    border-radius: .1rem;
`;
const Tr = styled.tr`
    border-bottom: 1px solid ${props => props.theme.mainColor};
`;
const Thead = styled.thead`
    border-bottom: 1px solid ${props => props.theme.mainColor};
`;
const Tfoot = styled.tfoot`
`;
const Tbody = styled.tbody`

    & > tr:nth-child(even) td {
        background-color: #eee;
    }
`;

export interface IDataListProps<T> {
    data: T[];
}

export class DataList<T> extends React.Component<IDataListProps<T>, {}> {
    ths: string[];

    constructor(props: IDataListProps<T>) {
        super();
        this.ths = Object.getOwnPropertyNames(props.data[0]);
        this.renderDatum = this.renderDatum.bind(this);
    }

    renderDatum(datum: any) {
        return <Tr key={datum.id}>{ this.ths.map(th => <Td key={`${datum.id}-${th}`}>{ datum[th] }</Td>) }</Tr>;
    }

    render() {
        const trs: JSX.Element[] = [];

        return (
            <Table>
                <Thead>
                    <Tr>{ this.ths.map(th => <Th key={th}>{ th }</Th>) }</Tr>
                </Thead>
                <Tbody>
                    { this.props.data.map(this.renderDatum)}
                </Tbody>
            </Table>
        );
    }
};
