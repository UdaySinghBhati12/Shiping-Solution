import React from "react"

const Service = ()=> {
    return (
        <div>
            <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">ESVAP Features</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our "ESVAP Features" section to optimize your logistics experience. Discover real-time tracking, advanced analytics, personalized recommendations, and more. Our platform streamlines logistics processes for shippers, carriers, and managers. Discover how we can enhance your operations today</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://img.freepik.com/free-photo/plane-boxes-arrangement_23-2149853135.jpg?size=626&ext=jpg&ga=GA1.2.1486710708.1691737541&semt=ais"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Air Cargo</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://i0.wp.com/maritime-professionals.com/wp-content/uploads/2022/02/Containers-port-800-x-600.jpg?resize=780%2C470&ssl=1"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Marine Terminal</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="data:image/jpeg;base64,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"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Ocean Carrier Companies</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="data:image/jpeg;base64,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"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">System Integrator</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://media.istockphoto.com/id/464267243/photo/the-container-terminal-at-dusk.jpg?s=612x612&w=0&k=20&c=VqSrAp_iybxU_dWC_2Vp4Gy1dVEAXfnKRnBEb2llKSM="/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Intermodal Operator</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="data:image/jpeg;base64,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"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"></h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Train Tranportation</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Service