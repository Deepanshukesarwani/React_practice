import React from 'react'

const InputField = () => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block text-black">
                    label
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5  text-black"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right  text-black">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none  text-black"
                    
                >
                    
                        <option value="usd" className=' text-black'>
                            usd
                        </option>
                
                </select>
            </div>
        </div>
  )
}

export default InputField
