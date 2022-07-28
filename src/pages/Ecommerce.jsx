import React from 'react';
// import { BsCurrencyDollar } from 'react-icons/bs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, recentTransactions, dropdownData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import TotalEarnings from './sections_on_homepage/TotalEarnings';
import SalesView from './sections_on_homepage/SalesView';
import WeeklyStats from './sections_on_homepage/WeeklyStats';
import Transactions from './sections_on_homepage/Transactions';
import Revenue from './sections_on_homepage/Revenue';
// import product9 from '../data/product9.jpg';


export const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        {/* total earningData */} <TotalEarnings currentColor={currentColor}/>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        {/* sales */} <SalesView currentMode={currentMode} currentColor={currentColor}/>
        {/* trasac */} <Transactions currentMode={currentMode} currentColor={currentColor}/>
      </div>

      {/* revenue */} <Revenue currentMode={currentMode} currentColor={currentColor}/>


      <div className="flex flex-wrap justify-center">
        {/* weekly stats */} <WeeklyStats currentColor={currentColor}/>
        {/* project12 */}

      </div>
    </div>
  );
};

export default Ecommerce;
