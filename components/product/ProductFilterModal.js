import {FaTimes} from "react-icons/fa";
import 'animate.css';

const ProductFilterModal = ({isActive, onToggle}) => {
    return (
        <div
            className={`modal ${isActive ? 'modal-open' : ''} fade fixed top-0 left-0 w-full h-full  outline-none overflow-x-hidden overflow-y-auto`}
            tabIndex="-1" aria-labelledby="FilterModal" aria-hidden="true">
            <div className={`modal-dialog relative ${isActive ? 'animate__animated animate__fadeInDown animate__faster' : 'animate__animated animate__fadeOutUp animate__faster'} pointer-events-none w-10/12 md:w-9/12 lg:w-7/12`}>
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">

                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="ProductFilterTitle"> Filter
                            By </h5>
                        <button onClick={onToggle}
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close">
                            <FaTimes size={16} />
                        </button>
                    </div>

                    <div className="p-4 flex ">

                        <div className='w-2/4 md:w-1/3 px-5'>
                            <label
                                htmlFor='address'
                                className='w-full sm:w-1/3 text-[12px] font-bold'
                            >
                                Product Type
                            </label>
                            <select
                                placeholder='Select your township'
                                className='w-full bg-500 text-black rounded-lg border mt-3 py-3 px-1.5 text-[12px]'
                            >
                                <option>Select your township</option>

                            </select>
                        </div>

                        <div className='w-2/4 md:w-1/3 px-5'>
                            <label
                                htmlFor='address'
                                className='w-full sm:w-1/3 text-[12px] font-bold'
                            >
                                Product Type
                            </label>
                            <select
                                placeholder='Select your township'
                                className='w-full bg-500 text-black rounded-lg border mt-3 py-3 px-1.5 text-[12px]'
                            >
                                <option>Select your township</option>

                            </select>
                        </div>

                        <div className='w-2/4 md:w-1/3 px-5'>
                            <label
                                htmlFor='address'
                                className='w-full sm:w-1/3 text-[12px] font-bold'
                            >
                                Product Type
                            </label>
                            <select
                                placeholder='Select your township'
                                className='w-full bg-500 text-black rounded-lg border mt-3 py-3 px-1.5 text-[12px]'
                            >
                                <option>Select your township</option>

                            </select>
                        </div>

                    </div>

                    <div
                        className="flex flex-shrink-0 flex-wrap flex-row-reverse items-center justify-end p-4 rounded-b-md">
                        <div className="w-2/4 md:w-1/3 px-5">
                        <button type="button" className="px-6 y-2.5 ml-1 py-3 w-full
                            bg-400 text-white
                            font-medium text-xs uppercase leading-tight
                            rounded-lg shadow-md
                            hover:bg-200 hover:shadow-lg
                            focus:bg-200 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-200 active:shadow-lg
                            transition duration-150 ease-in-out">
                            Search By Filter
                        </button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductFilterModal