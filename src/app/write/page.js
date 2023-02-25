"use client"
import { Box } from '@chakra-ui/react'
import React from 'react'

function Text() {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-red px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-black-700 ">
                  Problem
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="block w-full flex-1 rounded-none rounded-r-md border-black-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-background box-content h-60 w-42 p-2 border-2"
                    placeholder="Write Text"
                  />
                </div>
              </div>
            </div>
            <div className="bg-black-50 text-inset-y-0 left-0 sm:">
              <button
                type="submit"
                className="inline-flex justify-start rounded-md border border-transparent bg-#[2fd12f] py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
            <div>
              <label htmlFor="about" className="block text-sm font-medium black-700">
                Solution
              </label>

              <div className="flex gap-10">
                <input className="form-input h-screen block flex-1 text-background box-content p-x-0 border-2 text-[20px] 
                min-height: 50px;
                min-width: 50px;
                max-height: 100px;
                max-width: 100px" placeholder="Image Result" />
                <input className="form-input h-screen block flex-1 text-background box-content p-x-0 border-2 text-[20px] items-start
                min-height: 50px;
                min-width: 50px;
                max-height: 100px;
                max-width: 100px" placeholder="Text Result" />
              </div>


            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Text