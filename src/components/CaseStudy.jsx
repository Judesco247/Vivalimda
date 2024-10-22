import React from 'react'
import { case_study1, case_study2, case_study3 } from '../assets'

const CaseStudy = () => (
//     <div class="container mx-auto px-4 py-8">
//     <h1 class="text-3xl font-bold mb-4">Image Slider with Hover Effect</h1>
//     <div class="carousel flex overflow-x-auto">
//       {/* <!-- First slide --> */}
//       <div class="w-64 mx-2 rounded-lg shadow-lg" style={{transition: 'all 0.3s ease;'}}>
//         <img class="w-full h-32 object-cover rounded-t-lg" src={case_study1} alt="Image 1" />
//         <div class="p-4">
//           <h2 class="text-xl font-semibold mb-2">Header 1</h2>
//           <div class="overflow-hidden" style={{height: '300px;'}}>
//             <p class="text-gray-600">
//               Paragraph 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur enim non mi malesuada, id congue urna semper.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Second slide --> */}
//       <div class="card w-64 mx-2 rounded-lg shadow-lg">
//         <img class="w-full h-32 object-cover rounded-t-lg" src="image2.jpg" alt="Image 2" />
//         <div class="p-4">
//           <h2 class="text-xl font-semibold mb-2">Header 2</h2>
//           <div class="expand-text overflow-hidden">
//             <p class="text-gray-600">
//               Paragraph 2 - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Third slide --> */}
//       <div class="card w-64 mx-2 rounded-lg shadow-lg">
//         <img class="w-full h-32 object-cover rounded-t-lg" src="image3.jpg" alt="Image 3" />
//         <div class="p-4">
//           <h2 class="text-xl font-semibold mb-2">Header 3</h2>
//           <div class="expand-text overflow-hidden">
//             <p class="text-gray-600">
//               Paragraph 3 - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Fourth slide --> */}
//       <div class="card w-64 mx-2 rounded-lg shadow-lg">
//         <img class="w-full h-32 object-cover rounded-t-lg" src="image4.jpg" alt="Image 4" />
//         <div class="p-4">
//           <h2 class="text-xl font-semibold mb-2">Header 4</h2>
//           <div class="expand-text overflow-hidden">
//             <p class="text-gray-600">
//               Paragraph 4 - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
<div
      className="relative bg-cover bg-fixed h-64"
      style={{ backgroundImage: "url('./assets/case-study1.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Your Header</h1>
            <p className="text-xl">Your paragraph goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )

export default CaseStudy