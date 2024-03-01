import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="text-5xl text-zinc-400 w-[100%] h-[100%] flex items-center justify-center pt-36 flex-col">
			LogIN to use the Image Editor
			<Link href="/ImageEditor">
				<br />
				<button className="bg-zinc-400 text-black p-2 rounded-md mt-4">
					LogIN
				</button>
			</Link>
		</div>
	);
}
