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
      <div className=' bg-app_lc_background 
      dark:bg-app_ld_background 
      text-app_lc_text 
      dark:text-app_ld_text flex 
      md:flex-row flex-col 
      w-screen h-fit md:h-screen
      justify-center '>
        <nav className='cursor-pointerr w-fit 
        
          flex-wrap  
          md:w-[100px] 
          h-fit md:mt-[10vh] 
          rounded-sm shadow 
          md:mr-2 z-20 flex flex-row md:flex-col 
          md:px-2
          bg-app_lc_secondary dark:bg-app_ld_secondary gap-2'>
            <Nav />
        </nav>
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
            <div className=' flex flex-row z-50 ' >
              <Header />
            </div>
        </header>
        
        <section className=' 
        md:overflow-auto md:w-[640px] md:h-[80vh]  mt-[10vh] 
         rounded-sm shadow rounded-l-none 
         bg-app_lc_secondary  dark:bg-app_ld_secondary
         '>
          <div className='  mx-4 p-4 shadow-[-15px_-0px_rgba(126,_150,_147,_0.4)] 
' >

          {useRoutes(MyRoute)}
          </div>

        </section>
       </div>
  )
}

export default App
