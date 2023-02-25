"use client";
import Typewriter from 'typewriter-effect';
import { Features } from "../features";
import {
    AutomatedBacklogIcon,
    CustomViewsIcon,
    DiscussionIcon,
    IssuesIcon,
    ParentSubIcon,
    WorkflowsIcon,
} from "../icons/features";

export const About = () => {
    return (
        <Features color="0,225,244" colorDark="31,49,64">
            <Features.Main
                title={
                    <>
                        We are
                        <Typewriter
                            options={{
                                strings: ['Team Blinders'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </>
                }
                // image="/team.webp"
                imageSize="large"
                text="Blinders is a team of highly skilled professionals who are dedicated to delivering exceptional results in their field. With a passion for innovation and a commitment to excellence, Blinders brings a unique and fresh perspective to every project they undertake."
            />
            <Features.Grid
                features={[
                    {
                        icon: ParentSubIcon,
                        title: "Text to Text",
                        text: "Collaborate across teams and departments.",
                    },
                    {
                        icon: AutomatedBacklogIcon,
                        title: "Text to Image",
                        text: "Collaborate across teams and departments.",
                    },
                    {
                        icon: WorkflowsIcon,
                        title: "NFT minting",
                        text: "Collaborate across teams and departments.",
                    },
                    {
                        icon: CustomViewsIcon,
                        title: "Checkout the community",
                        text: "Collaborate across teams and departments.",
                    },
                    // {
                    //     icon: DiscussionIcon,
                    //     title: "Project insights.",
                    //     text: "Track scope, velocity, and progress over time.",
                    // },
                    // {
                    //     icon: IssuesIcon,
                    //     title: "Personal notifications.",
                    //     text: "Stay in the loop on project activity and updates.",
                    // },
                ]}
            />
            <Features.Cards
                features={[
                    {
                        // image: "/card-updates.webp",
                        imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
                        title: "Text To Image",
                        text: "Turn words into captivating images with ease - Your message, our creativity!",
                    },
                    {
                        image: "/card-roadmaps.webp",
                        imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
                        title: "Text To Text",
                        text: "Connect with anyone, anywhere - effortlessly.",
                    },
                ]}
            />
        </Features>
    );
};
