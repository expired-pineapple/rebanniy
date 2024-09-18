const Footer = () => {
  const year = new Date().getFullYear()
return(
<main className="footer text-white relative">
  <div className="w-full pt-16 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-fixed bg-cover bg-center mix-blend-plus-darker opacity-10" style={{backgroundImage: "url(https://nauthemes.com/demo/muezzin/wp-content/themes/taqwa/assets/images/tq-bg4.jpg)"}}></div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 relative pb-10 border-b border-white border-opacity-20">
        <div className="flex gap-4 mb-8 md:mb-0 items-center">
		
          <object className="" data="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/footer-icon.svg" width="100" height="100"></object>
		  <div className="flex flex-col">
          <p className="text-lg mb-2 heading">Become a Part of Our Community</p>
          <h3 className="text-3xl font-bold heading">Inspired? Join Us Right Now!</h3>
		  </div>
        </div>
        <a href="/register" className="px-6 py-3 bg-[#DB9E30] text-white rounded-full font-semibold hover:bg-opacity-90 transition duration-300">Join Community</a>
      </div>
      <div className="flex flex-col justify-between py-10 sm:flex-row">

        <div className="py-4">
          <h4 className="text-xl font-semibold mb-4 heading">Information</h4>
          <p className="text-lg sm:w-1/2">Elit duis volutpat ligula nulla a getmolestie mi consectetur auctor ugue ac tincidunt, var ius felis et, augue lorem. Aliquam accumsan fringilla.</p>
        </div>
        <div className="flex sm:flex-row flex-col gap-6 w-[60%]">
        <div className="w-full">
          <h4 className="text-xl font-semibold mb-4 heading">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div>
                <span className="block">Hotline: <a href="tel:+251 9123 789 09" className="hover:underline">+251 9123 789 09</a></span>
                <span className="text-sm">Mon - Sat: 9.00 am - 6.00 pm</span>
              </div>
            </li>
            <li className="flex items-center">
              <a href="mailto:username@domain.com" className="hover:underline">username@domain.com</a>
            </li>
            <li className="flex items-center">
              <span>New Orleans, Jamia Mosque</span>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-xl font-semibold mb-4 heading">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home – Islamic Center</a></li>
            <li><a href="#" className="hover:underline">Salat Timings</a></li>
            <li><a href="#" className="hover:underline">Travel & Tours</a></li>
            <li><a href="#" className="hover:underline">Online Classes</a></li>
            <li><a href="#" className="hover:underline">Term Conditions</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white border-opacity-20">
        <a href="https://perbytes.com" target="_blank" className="mb-4 md:mb-0">Perbytes  <span className="text-white">© Copyright {year}, All Rights Reserved</span></a>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-opacity-80"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" className="hover:text-opacity-80"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-opacity-80"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-opacity-80"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</main>)
}

export default Footer