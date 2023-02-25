import Link from "next/link";
import { Container } from "./container";
// import { GitHub, GithubIcon } from "./icons/github";
import Logo from "../assets/logo.webp";

// import { TwitterIcon } from "./icons/twitter";
import Image from "next/image";

const footerLinks = [
    {
        title: "Product",
        links: [
            { title: "Text-To-Text", href: "/image" },
            { title: "Text-To-Image", href: "/image" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "About us", href: "#" },

        ],
    },
    {
        title: "Resources",
        links: [
            { title: "Community", href: "#" },
            { title: "Contact", href: "#" },

            { title: "Terms of service", href: "#" },
        ],
    },
    {
        title: "Developers",
        links: [
            { title: "API", href: "#" },

            { title: "GitHub", href: "#" },
        ],
    },
];

export const Footer = () => (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
        <Container className="flex flex-col justify-between lg:flex-row">

            <div className="flex flex-wrap">
                {footerLinks.map((column) => (
                    <div
                        key={column.title}
                        className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
                    >
                        <h3 className="mb-3 font-medium">{column.title}</h3>
                        <ul>
                            {column.links.map((link) => (
                                <li key={link.title} className="[&_a]:last:mb-0">
                                    <Link
                                        className="mb-3 block text-grey transition-colors hover:text-off-white"
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
            {/* <div className="mt-auto flex space-x-4 text-grey">
                <TwitterIcon />
                <GithubIcon />

            </div> */}
            <div>
                <div className="flex h-full flex-row justify-between lg:flex-col">
                    {/* <div className="flex items-center text-grey"> */}
                    {/* <Logo className="mr-4 h-4 w-4" /> */}
                    <Link href='/image'>
                        <Image src={Logo} alt="logo" height={100} width={100} />
                    </Link>
                    {/* </div> */}
                    {/* <div className="mt-auto flex space-x-4 text-grey">
                        <TwitterIcon />
                        <GithubIcon />

                    </div> */}
                </div>
            </div>
        </Container>
    </footer>
);
