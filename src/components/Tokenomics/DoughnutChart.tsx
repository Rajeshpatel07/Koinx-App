import { Chart as ChartJS, ArcElement } from 'chart.js';
ChartJS.register(ArcElement);

import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {

  return (
    <div className='flex items-center gap-5'>
      <div className='w-32 h-32 sm:w-52'>
        <Doughnut
          // Maintain your class for other styling
          data={{
            labels: ["A", "B"],
            datasets: [
              {
                label: "Revenue",
                data: [70, 30],
                backgroundColor: ['#337ab7', '#ffc107'], // Set colors for each data point
                borderColor: ['#337ab7', '#ffc107'], // Set border colors to match background
                hoverBackgroundColor: ['#2e6da4', '#ffa000'], // Set hover background colors
                hoverBorderColor: ['#2e6da4', '#ffa000'], // Set hover border colors
              },
            ],
          }}
        //   options={options}
        />
      </div>

      <div className='flex flex-col'>
        <div className='flex  items-center gap-3'>
          <div className='h-3 w-3 rounded-3xl bg-blue-400 '></div>
          <p>Crowdsale investers: 70%</p>
        </div>

        <div className='flex items-center gap-3'>
          <div className='h-3 w-3 rounded-3xl bg-yellow-400 '></div>
          <p>Foundation: 30%</p>
        </div>
      </div>

    </div>
  );
}

