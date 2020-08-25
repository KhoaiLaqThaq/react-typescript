import React, { useMemo } from 'react';
import { Chart } from 'react-charts';

function DashboardChart(props) {
    const data1 = useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7], [5, 3]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4], [5, 6]]
            },
            {
                label: 'Series 3',
                data: [[0, 1.5], [1, 2.5], [2, 4], [3, 4.5], [4, 4], [5, 7]]
            }
        ], 
        []
    )

    const axes1 = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Chart data={data1} axes={axes1}/>
            
        </div>
    );
}

export default DashboardChart;