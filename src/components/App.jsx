import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { showPicker, closePicker } from '../actions'
import { hex } from '../data/Color'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Picker from './Picker'

export default function App () {
  const color = useSelector(state => state.color.value)
  const editing = useSelector(state => state.editing)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center space-y-2 bg-white-100'>
      <div className='relative'>
        <div
          style={{ backgroundColor: hex(color) }}
          className='w-40 h-40 overflow-hidden relative group'
        >
          <button
            className={classnames(
              'block w-full p-2 text-black-500 bg-white absolute left-0 bottom-0 transition transition-all duration-200 transform translate-y-full flex flex-col items-center focus:outline-none', {
                'group-hover:translate-y-0': !editing
              }
            )}
            onClick={() => dispatch(showPicker())}
          >
            <ChevronUpIcon className='w-5 h-5' />
            <span className='uppercase text-xs font-medium'>Pick Color</span>
          </button>
        </div>
        <div
          className={classnames(
            'absolute -top-1/2 left-1/2 transform -translate-x-1/2 transition transition-all duration-300 bg-white shadow-lg', {
              'translate-y-10 opacity-0 pointer-events-none': !editing
            }
          )}
        >
          <Picker />
          <button
            className='block w-full p-2 text-black-500 bg-black-50 hover:bg-black-100 hover:text-black-800 focus:outline-none flex flex-col items-center'
            onClick={() => dispatch(closePicker())}
          >
            <span className='uppercase text-xs font-medium'>Close</span>
            <ChevronDownIcon className='w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='font-medium'>
        {hex(color)}
      </div>
    </div>
  )
}
