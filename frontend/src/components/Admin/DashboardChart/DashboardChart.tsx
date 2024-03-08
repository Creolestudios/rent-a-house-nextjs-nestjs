import React, { useEffect, useState } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJs } from 'chart.js/auto';
import { Box } from '@/globalStyles';
import Title from '../Title/Title';
import { fontFamily } from '@/styles/variable';
import { useDispatch } from 'react-redux';
import actions from '@/redux/admin/dashboard/dashboard.action';
import { appConstant } from '@/config/constants';
import { Select } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';

const DashboardChart = ({ dashboardChartData, chartyear, totalUser }: any) => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState<any>({
    labels: dashboardChartData?.map((data: { month: string }) => data?.month),
    datasets: [
      {
        label: 'Users Gained ',
        data: dashboardChartData?.map(
          (data: { monthCount: number }) => data?.monthCount
        ),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#FF904C',
        borderWidth: 2,
        pointRadius: 0,
        borderJoinStyle: 'round',
        tension: 0.4,
        spanGaps: true,
      },
    ],
  });
  const currentYear = new Date().getFullYear();
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(0 0 0 / 80%)',
          fontSize: 12,
          fontFamily: `${fontFamily.manropeBold}`,
        },
      },
      y: {
        border: {
          width: 0,
        },
        grace: 5,
        min: 0,
        max:
          totalUser &&
          ((totalUser + 5) % 2 === 0 ? totalUser + 5 : totalUser + 6),
        ticks: {
          stepSize: 1,
          color: 'rgba(0 0 0 / 80%)',
          fontSize: 12,
          fontFamily: `${fontFamily.manropeBold}`,
        },
      },
    },
  };

  ChartJs.register(CategoryScale);

  const objStyle = {
    border: '2px solid #03488B',
  };

  const handleYearChange = (e) => {
    let value = {
      year: parseInt(e),
    };
    dispatch(actions.getDashboardData(value));
  };

  useEffect(() => {
    setChartData({
      labels: dashboardChartData?.map((data: any) => data?.month),
      datasets: [
        {
          label: 'Users Gained ',
          data: dashboardChartData?.map((data: any) => data?.monthCount),
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: '#FF904C',
          borderWidth: 2,
          pointRadius: 0,
          borderJoinStyle: 'round',
          tension: 0.4,
          spanGaps: true,
        },
      ],
    });
  }, [dashboardChartData, chartyear]);

  return (
    <Box {...objStyle} className='chart-wrapper'>
      <Title
        title='User Registration Graph'
        color='rgba(0 0 0 / 30%)'
        fontFamily={fontFamily.manropeSemiBold}
        textTransform='capitalize'
        marginBottom='12px'
      />
      <div className='chart-title-wrapper'>
        <div className='title'>
          {`${appConstant.dasboardTotalUser} ${totalUser}`}
        </div>
        <Select
          defaultValue={currentYear}
          style={{ width: 70 }}
          className='year-badge'
          suffixIcon={<Icon component={downArrow} />}
          onSelect={handleYearChange}
          options={
            chartyear && chartyear.map((year) => ({ label: year, value: year }))
          }
        />
      </div>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default DashboardChart;
