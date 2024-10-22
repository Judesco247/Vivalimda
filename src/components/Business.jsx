import React from 'react'
import styles from '../style'

const Business = () => (
  <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
  <div className="bg-color0 p-4 mt-[30px] md:w-[1000px] w-[428px] md:h-[200px] h-[722px]">
    <h2 className="text-center text-2xl text-white font-bold font-bodyfont mb-4 pt-5">Achievements</h2>
    <br />
    <div className="md:grid grid-cols-5 gap-4">
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">100+</span>
        <span className="text-white font-bodyfont">Clients</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">2700</span>
        <span className="text-white font-bodyfont">Projects</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">96%</span>
        <span className="text-white font-bodyfont">Success rate</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">30</span>
        <span className="text-white font-bodyfont">Countries</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">10+</span>
        <span className="text-white font-bodyfont">Years of Experience</span>
      </div>
    </div>
  </div>
  </div>

)

export default Business




// import React, { useState } from 'react';

// function CollapsibleItem({ title }) {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="border rounded p-4 mb-4">
//       <div className="flex justify-between items-center">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <button
//           className="text-blue-500 hover:underline focus:outline-none"
//           onClick={toggleCollapse}
//         >
//           {isCollapsed ? 'Expand' : 'Collapse'}
//         </button>
//       </div>
//       <div className={`mt-2 ${isCollapsed ? 'hidden' : 'block'}`}>
//         {/* Content that appears when the item is expanded */}
//         <p>This is the content of the {title} item.</p>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const items = [
//     { title: 'Item 1' },
//     { title: 'Item 2' },
//     { title: 'Item 3' },
//     { title: 'Item 4' },
//   ];

//   return (
//     <div className="container mx-auto mt-8">
//       {items.map((item, index) => (
//         <CollapsibleItem key={index} title={item.title} />
//       ))}
//       {/* Content below collapsible items */}
//     </div>
//   );
// }

// export default App;
