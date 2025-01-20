import Link from "next/link";
import Image from "next/image";
import {DottedSeparator} from "@/components/dotted-separator";
import {Navigation} from "@/components/Navigation";
import {WorkspaceSwitcher} from "@/components/workspace-switcher";
import { Projects } from "./projects";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-200 p-4 w-full">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={164} height={48}/>
            </Link>
            <DottedSeparator className="my-4"/>
            <WorkspaceSwitcher />
            <DottedSeparator className="my-4"/>
            <Navigation />
            <DottedSeparator className="my-4"/>
            <Projects />
        </aside>
    )
}