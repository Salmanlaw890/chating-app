import React from 'react'

const GenderCheck = ({onCheckBoxChange,SelectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className='label gap-3 cursor-pointer'>
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className='checkbox  border-slate-300' 
                checked = {SelectedGender === "MALE"}
                onChange={()=>onCheckBoxChange("MALE")}
                 />
            </label>
        </div>

        <div className='form-control'>
            <label className='label gap-3 cursor-pointer'>
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className='checkbox  border-slate-300'
                checked = {SelectedGender === "FEMALE"}
                onChange={()=>onCheckBoxChange("FEMALE")}
                 />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck





