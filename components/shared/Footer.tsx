import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="sm:px-16 py-4 px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 flex-wrap bg-[#0f1117] fixed bottom-0 w-full">
			<p className="text-base font-bold text-white mb-2 sm:mb-0">
				@2024 ImageEditor
			</p>
			<h3 className="font-extrabold text-2xl text-[#ffffff] mb-2 sm:mb-0">
				Image<span className="text-[#ff7000]">Editor</span>
			</h3>
			<div></div>
		</footer>
	);
}

export default Footer;
