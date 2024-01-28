import React from 'react';

function DashboardCard13() {
  return (
    <div className="bg-white border rounded-sm shadow-lg col-span-full xl:col-span-6 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Income/Expenses</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="p-2 text-xs font-semibold uppercase rounded-sm text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            Today
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-rose-500">
                <svg className="fill-current w-9 h-9 text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Qonto
                    </a>{' '}
                    billing
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium text-slate-800 dark:text-slate-100">-$49.88 VTN</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-emerald-500">
                <svg className="fill-current w-9 h-9 text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Opensea.io
                    </a>{' '}
                    Mercado de SAn Miguel
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium text-emerald-500">+249.88 VTN</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-emerald-500">
                <svg className="fill-current w-9 h-9 text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Talent.protocol
                    </a>
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium text-emerald-500">+99.99 VTN</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-emerald-500">
                <svg className="fill-current w-9 h-9 text-emerald-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Market Nft
                    </a>
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium text-emerald-500">+1,200.88 VTN</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-slate-200">
                <svg className="fill-current w-9 h-9 text-slate-400" viewBox="0 0 36 36">
                  <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm border-b grow border-slate-100 dark:border-slate-700">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      mirror.xyz
                    </a>{' '}
                    El retiro
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium line-through text-slate-800 dark:text-slate-100">+$99.99 VTN</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-rose-500">
                <svg className="fill-current w-9 h-9 text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="flex items-center py-2 text-sm grow">
                <div className="flex justify-between grow">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Lens.xyz
                    </a>{' '}
                    Casa de Campo
                  </div>
                  <div className="self-start ml-2 shrink-0">
                    <span className="font-medium text-slate-800 dark:text-slate-100">-$49.88 VTN</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
