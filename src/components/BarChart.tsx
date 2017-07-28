import * as React from 'react';
import { max, scaleLinear, select } from 'd3';

export interface IBarChartProps {
    data: number[];
    size: number[];
    interval?: string;
}

export class BarChart extends React.Component<IBarChartProps, {}> {
    static defaultProps: Partial<IBarChartProps> = {
        interval: 'daily',
    };

    node: SVGSVGElement;
    constructor(props: IBarChartProps) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount() {
        this.createBarChart();
    }

    createBarChart() {
        const node = this.node;
        const dataMax = max(this.props.data);
        const yScale = scaleLinear().domain([0, dataMax]).range([0, this.props.size[1]]);

        select(node).selectAll('rect').data(this.props.data).enter().append('rect');
        select(node).selectAll('rect').data(this.props.data).exit().remove();
        select(node).selectAll('rect').data(this.props.data)
            .style('fill', 'rgb(250, 128, 114)')
            .attr('x', (d, i) => i * (450 / this.props.data.length))
            .attr('y', 500)
            .attr('width', 450 / this.props.data.length - 50)
            .attr('height', 0)
            .transition().duration(500)
            .attr('y', (d) => yScale(d))
            .attr('height', (d) => 500 - yScale(d));
    }

    render() {
        return (
            <svg ref={(node) => this.node = node} width={500} height={500} />
        );
    }
}
