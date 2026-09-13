// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-slate-200 mt-12 py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
//         <div className="col-span-2">
          
//           {/* DevStack Logo */}
//           <div className="mb-4">
//             <img 
//               src="/logos/logo-text.png" 
//               alt="DevStack Logo" 
//               className="h-7 object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity" 
//             />
//           </div>
          
//           <p className="text-slate-400 max-w-sm leading-relaxed">
//             Compare options, explore technologies, and pair together the perfect developer stack for your next web application.
//           </p>
//         </div>
//         <div>
//           <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[10px]">Product</h4>
//           <ul className="space-y-2 text-slate-500">
//             <li><a href="#" className="hover:text-pink-600">Home</a></li>
//             <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[10px]">Support</h4>
//           <ul className="space-y-2 text-slate-500">
//             <li><a href="#" className="hover:text-pink-600">About</a></li>
//             <li><a href="#" className="hover:text-pink-600">Docs</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[10px]">Legal</h4>
//           <ul className="space-y-2 text-slate-500">
//             <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-slate-200 pt-16 pb-8 mt-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            {/* DevStack Logo */}
            <div className="mb-4">
              <img 
                src="/logos/logo-text.png" 
                alt="DevStack Logo" 
                className="h-7 object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            
            <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}