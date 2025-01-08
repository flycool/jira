import SignInCard from "@/features/auth/components/sign-in-card";
import {getCurrent} from "@/features/auth/queries";
import {redirect} from "next/navigation";

export default async function signInPage() {
    const user = await getCurrent()

    if (user) redirect("/")

    return (
        <SignInCard/>
    )
}