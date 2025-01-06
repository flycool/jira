import Link from "next/link";
import Image from "next/image";
import {DottedSeparator} from "@/components/dotted-separator";
import {Navigation} from "@/components/Navigation";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-200 p-4 w-full">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={164} height={48}/>
            </Link>
            <DottedSeparator className="my-4"/>
            <Navigation />
        </aside>
    )
}