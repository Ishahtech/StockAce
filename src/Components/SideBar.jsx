// import
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'
// //  import {FontAwesomeIcon} from 'react-icons/fa'

// function SideBar() {
//   return (
//     <>
//       {/* <h2>SideBar</h2> */}
//       <aside id="sidebar">
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//                 <BsCart3  className='icon_header'/> StockAce
//             </div>
//             <span className='icon close_icon' >X</span>
//         </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsGrid1X2Fill className='icon'/> Overview
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillArchiveFill className='icon'/> New Product
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'></li>
//             <li className='sidebar-list-item'></li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsMenuButtonWideFill className='icon'/> Help Centre
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGearFill className='icon'/> Settings
//                 </a>
//             </li>
//             <li className='sidebar-list-item'></li>
//             <li className='sidebar-list-item'></li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                 {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /> Log Out */}
//                     <BsFillGearFill className='icon'/> Log Out
//                 </a>
//             </li>
//         </ul>
//     </aside>
//     </>
//   )
// }

// export default SideBar

<div className="w-48 h-11 justify-end items-end gap-1.5 inline-flex">
  <div className="w-12 h-11 relative">
    <div className="w-12 h-11 left-0 top-0 absolute" />
    <img
      className="w-4 h-3 left-[19.95px] top-[17.62px] absolute origin-top-left rotate-[17.62deg]"
      src="https://via.placeholder.com/15x13"
    />
  </div>
  <div className="justify-end items-start gap-1.5 flex">
    <div className="text-zinc-800 text-4xl font-medium font-['Karla']">
      StockAce
    </div>
  </div>
</div>;

function SideBar() {
  return (
    <>
      <div className="w-70 h-96 py-8 bg-white shadow flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-48 h-11 justify-end items-end gap-1.5 inline-flex">
          <div className="w-12 h-11 relative">
            <div className="w-44 h-11 left-0 top-0 absolute" />
            <img
              // className="w-4 h-3 left-[19.95px] top-[17.62px] absolute origin-top-left "
              src="src/assets/icons/stockace.svg"
            />
          </div>
          <div className="justify-end items-start gap-1.5 flex">
            <div className="text-zinc-800 text-4xl font-medium font-['Karla']">
              StockAce
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-56 flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="w-80 h-14 pl-12 pr-9 py-2 bg-indigo-100 justify-start items-center gap-8 inline-flex">
              <div className="h-11 justify-start items-start flex">
                <div className="w-10 p-2 justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-11 h-11 left-0 top-0 absolute">
                      <img src="src/assets/icons/category.svg" alt="overview icon" /></div>
                  </div>
                </div>
                <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                    <div className="text-blue-800 text-xl font-medium font-['Karla']">
                      Overview
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-0.5 py-2.5 justify-end items-center gap-2.5 flex">
                <div className="w-0.5 py-2 justify-start items-start flex" />
              </div>
            </div>
            <div className="w-80 h-14 pl-12 pr-10 py-2 justify-start items-center gap-7 inline-flex">
              <div className="justify-start items-start flex">
                <div className="w-10 p-2 justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-[0.86px] top-[0.86px] absolute"></div>
                    <div className="w-3 h-3 left-[12px] top-0 absolute">
                      <div className="w-3 h-3 left-[0.43px] top-[0.43px] absolute">
                      <img src="src/assets/icons/newbag.svg" alt="new product icon" />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                    <div className="text-neutral-600 text-xl font-medium font-['Karla']">
                      New Product
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-0.5 py-2.5" />
            </div>
            <div className="w-80 h-14 pl-12 pr-10 py-2 justify-start items-center gap-7 inline-flex">
              <div className="justify-start items-start flex">
                <div className="w-10 p-2 justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-[0.86px] top-[0.86px] absolute"></div>
                  </div>
                </div>
                <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                    <div className="text-neutral-600 text-xl font-medium font-['Karla']">
                      Products
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-0.5 py-2.5" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-28 flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="w-80 h-14 pl-12 pr-10 py-2 justify-start items-center gap-7 inline-flex">
                <div className="justify-start items-start flex">
                  <div className="w-10 p-2 justify-center items-center gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-[0.86px] top-[0.86px] absolute"></div>
                    </div>
                  </div>
                  <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                      <div className="text-neutral-600 text-xl font-medium font-['Karla']">
                        Help Centre
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-0.5 py-2.5" />
              </div>
              <div className="w-80 h-14 pl-12 pr-10 py-2 justify-start items-center gap-7 inline-flex">
                <div className="justify-start items-start flex">
                  <div className="w-10 p-2 justify-center items-center gap-2.5 flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                      <div className="text-neutral-600 text-xl font-medium font-['Karla']">
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-0.5 py-2.5" />
              </div>
            </div>
            <div className="w-80 h-14 pl-12 pr-10 py-2 justify-start items-center gap-7 inline-flex">
              <div className="justify-start items-start flex">
                <div className="w-11 px-0.5 py-2 justify-start items-center flex">
                  <div className="p-2 justify-start items-start gap-2 flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-[0.86px] top-[0.86px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div className="w-48 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-48 h-11 p-2 justify-start items-center gap-2 inline-flex">
                    <div className="text-neutral-600 text-xl font-medium font-['Karla']">
                      Log out
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-0.5 py-2.5" />
            </div>
          </div>
        </div>
    </>
  );
}

export default SideBar;
