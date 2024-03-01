import Link from "next/link";

import { UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

const Navbar = () => {
	// const router = useRouter();
	return (
		<nav className="flex  justify-between p-4 items-center bg-[#0f1117] fixed w-full">
			<div className="flex gap-3 md:gap-6">
				<Link href="/">
					<h3 className="font-extrabold text-base  md:text-2xl text-[#ffffff]">
						Image<span className="text-[#ff7000]">Editor</span>
					</h3>
				</Link>
			</div>
			<div className="flex gap-3">
				{/* <Link href="/signup">
					<button className="text-[#ffffff] px-4 py-2 border-2 bg-blue-500">
						Sign Up
					</button>
				</Link>
				<Link href="/signin">
					<button className="text-[#ffffff] px-4 py-2 border-2 bg-blue-500">
						Sign In
					</button>
				</Link> */}

				{/* <UserButton afterSignOutUrl="/" /> */}
				{/* <SignUp afterSignUpUrl="/ImageEditor" /> */}

				<UserButton />
			</div>
		</nav>
	);
};

// Exporting the Navbar component
export default Navbar;
