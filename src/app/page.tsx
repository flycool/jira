"use client";


import {useRouter} from "next/navigation";
import {useCurrent} from "@/features/auth/api/use-current";
import {useEffect} from "react";
import {useLogout} from "@/features/auth/api/use-logout";
import {Button} from "@/components/ui/button";

export default function Home() {
    const router = useRouter();
    const {data, isLoading} = useCurrent();
    const {mutate} = useLogout()

    useEffect(() => {
        if (!data && !isLoading) {
            router.push("/sign-in")
        }
    }, [data]);

    return (
        <div>
            Only visible to authorized users.
            <Button onClick={() => {
                mutate()
            }}>logout</Button>
        </div>
    );
}



