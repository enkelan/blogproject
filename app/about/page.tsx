import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {siteConfig} from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About me",
    description: "Information about me",
};

export default async function AboutPage() {
    return (
        <div className="container max-w-6xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
                <div className="flex-1 space-x-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        About me
                    </h1>
                </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="min-w-48 max-w-48 flex flex-col gap-2">
                    <Avatar className="w-auto h-auto">
                        <AvatarImage src="/avatar.png" alt={siteConfig.author} />
                        <AvatarFallback>Eno</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-center break-words">
                        {siteConfig.author}
                    </h2>
                    <p className="text-muted-foreground text-center break-words">
                        Junior Web Developer
                    </p>
                </div>
                <p className="text-muted-foreground text-lg py-4">
                    Hi, I&apos;m Eno. I&apos;m a junior web developer with a passion for
                    building things on the web. I&apos;m currently learning Next.js and
                    Tailwind CSS. I&apos;m also a fan of TypeScript and React. I built this
                    blog template to showcase my skills. I hope you like it.
                </p>
            </div>
        </div>
    )
}