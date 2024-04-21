
function Header() {
  return (
    <>
      <header className="header">
        <div className="w-96 h-14 pl-2 py-2 bg-neutral-50 rounded-3xl border border-zinc-500 justify-start items-center inline-flex">
          <div className="w-11 px-4 py-2 justify-center items-center flex">
            <div className="w-3.5 h-3.5 relative">
              <div className="w-3 h-3 left-[0.50px] top-[0.50px] absolute">
                <img src="src/assets/icons/search.svg" alt="search icon" />
              </div>
            </div>
          </div>
          <div className="h-11 p-2 justify-start items-center flex">
            <div className="text-neutral-600 text-base font-semibold font-['Lato'] leading-7">
              Search
            </div>
          </div>
        </div>

        <div className="w-64 h-11 justify-end items-center gap-10 inline-flex">
          <div className="w-6 h-6 relative">
            <div className="w-5 h-6 left-[0.86px] top-[0.86px] absolute">
              <img src="src/assets/icons/bell.svg" alt="bell-icon" />
            </div>
          </div>
          <div className="justify-start items-start gap-1 flex">
            <div className="w-11 h-11 relative">
              <div className="w-11 h-11 left-0 top-0 absolute " />
              <img
                className="w-20 h-12 left-[-12px]bg-zinc-300  top-0 absolute rounded-full"
                src="src/assets/admin.png"
                alt="admin image"
              />
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="justify-start items-center gap-3.5 inline-flex">
                <div className="text-zinc-800 text-2xl font-medium font-['Karla']">
                  Denim Pro
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="text-neutral-400 text-base font-medium font-['Karla']">
                Admin
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
