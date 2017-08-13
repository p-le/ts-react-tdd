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

export class DataList extends React.Component<{}, {}> {
    render() {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>A</Td>
                    </Tr>
                </Tbody>
            </Table>
        );
    }
};
