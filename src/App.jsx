import { useState } from 'react'
import Nav from './component/Nav'
import { CloudDownloadOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Language from './component/Language'
import Header from './component/Header'
import { Outlet, useRoutes } from 'react-router'
import MyRoute from './component/MyRoute'
import MyPhoto from './component/MyPhoto'

function App() {



  return (
      <div className='bg-app_lc_background dark:bg-app_ld_background text-app_lc_text dark:text-app_ld_text flex flex-row w-screen h-screen justify-center '>
        <nav className=' w-[100px] h-fit mt-[10vh] rounded-sm shadow mr-2 z-10 flex flex-col px-2 bg-app_lc_secondary dark:bg-app_ld_secondary'><Nav /></nav>
        <header className='shadown w-[360px] h-[82vh]  mt-[9vh]  rounded-sm z-10 
       shadow-[-5px_-5px_rgba(126,_150,_147,_0.4),_-10px_-10px_rgba(126,_150,_147,_0.3),_-15px_-15px_rgba(126,_150,_147,_0.2)] 
       flex flex-col justify-between
       bg-app_lc_secondary dark:bg-app_ld_secondary
       '>

              <div className=" group relative h-[17.5rem] transform overflow-hidden rounded-4xl z-50  ">
                <MyPhoto/>
                </div>
            <div className=' flex flex-col justify-center items-center gap-2'>
                <div>
                  Giovany Alejandro Alfaro López
                </div>
                <div className='flex'>
                  <Language/>
                </div>
            </div>
            <div className=' flex flex-row z-50' >
              <Header />
            </div>
        </header>
        
        <section className=' overflow-auto p-4 w-[640px] h-[80vh]  mt-[10vh]  rounded-sm shadow rounded-l-none  bg-app_lc_secondary dark:bg-app_ld_secondary'>
          {useRoutes(MyRoute)}

        </section>
       </div>
  )
}

export default App
