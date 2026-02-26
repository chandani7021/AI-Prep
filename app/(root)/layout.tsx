import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="root-layout">
			<nav>
				<Link href="/" className="flex items-center gap-2">
					<Image src="/logo.svg" alt="Logo" height={32} width={32} />
					<h2 className="text-primary-100">Interview Prep</h2>
				</Link>
			</nav>
			{children}
		</div>
	);
};

export default RootLayout;
