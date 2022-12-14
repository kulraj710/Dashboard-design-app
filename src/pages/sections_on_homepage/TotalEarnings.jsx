import React from 'react'
import { Button } from '../../components'

const TotalEarnings = ({currentColor}) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-800 lg:w-85 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Today's Earnings</p>
              <p className="text-2xl">$10,000.99</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Show Report"
              borderRadius="10px"
            />
          </div>
        </div>
  )
}

export default TotalEarnings