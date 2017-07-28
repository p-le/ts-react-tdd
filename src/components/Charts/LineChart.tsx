import * as React from 'react';
import { scaleTime, scaleLinear, select, line, extent, tsv, axisLeft, axisBottom } from 'd3';

interface IData {
    date: Date;
    close: number;
}

export interface ILineChartProps {
    data: IData[];
}

export interface IMargin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export class LineChart extends React.Component<ILineChartProps, {}> {
    node: SVGSVGElement;
    margin: IMargin;

    constructor(props: ILineChartProps) {
        super(props);
        this.margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50,
        };
    }

    componentDidMount() {
        const node = select(this.node);
        const width = parseInt(node.attr('width'), 10) - this.margin.left - this.margin.right;
        const height = parseInt(node.attr('height'), 10) - this.margin.top - this.margin.bottom;

        const xAxis = scaleTime().rangeRound([ 0, width ]);
        const yAxis = scaleLinear().rangeRound([ height, 0 ]);
        xAxis.domain(extent(this.props.data, (d: IData) => d.date));
        yAxis.domain(extent(this.props.data, (d: IData) => d.close));

        const createdLine = line<IData>()
            .x((d: IData) => xAxis(d.date))
            .y((d: IData) => yAxis(d.close));

        const g = node.append('g').attr('transform', `translate(${this.margin.left}, ${this.margin.right})`);

        g.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(axisBottom(xAxis))
            .select('.domain')
            .remove();

        g.append('g').call(axisLeft(yAxis))
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Price ($)');

        g.append('path')
            .datum(this.props.data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', createdLine);
    }

    render() {
        return (
            <svg ref={(node) => this.node = node} width={700} height={500} />
        );
    }
}
