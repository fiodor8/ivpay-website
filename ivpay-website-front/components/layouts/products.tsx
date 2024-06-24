'use client'

import { motion } from "framer-motion"
import { clipPathVariant, containerVariants, OpacityVariant } from "@/lib/motion_variants"

import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowBigRight, ArrowRight } from "lucide-react"

export default function Products() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-6 w-full gap-5 p-5"
        >
            <motion.div
                variants={clipPathVariant}
                className="col-span-3 aspect-[1.81] rounded-lg p-10 bg-white flex flex-col relative overflow-hidden"
            >
                <motion.h2
                    variants={clipPathVariant}
                    className="uppercase mb-7"
                >
                    POS
                </motion.h2>
                <motion.p
                    variants={clipPathVariant}
                    className="text-lg"
                >
                    Everything you need in one
                </motion.p>
                <motion.div
                    variants={OpacityVariant}
                    className="mt-auto"
                >
                    <Button variant="secondary" ><ArrowRight /></Button>
                </motion.div>
                <motion.div
                    variants={OpacityVariant}
                    className="absolute -z-10 top-0 right-0 h-full aspect-square"
                >
                    <Image src="/pos-cover.png" width={711} height={711} alt="app"/>
                </motion.div>
            </motion.div>
            <motion.div
                variants={clipPathVariant}
                className="col-span-3 aspect-[1.81] rounded-lg bg-white p-10 flex flex-col relative overflow-hidden"
            >
                <motion.h2
                    variants={clipPathVariant}
                    className="uppercase mb-7"
                >
                    Mobile App
                </motion.h2>
                <motion.p
                    variants={clipPathVariant}
                    className="text-lg max-w-[24ch]"
                >
                    Download a simple and user-friendly app to accept payments in more than 40 cryptocurrencies.
                </motion.p>
                <motion.div
                    variants={OpacityVariant}
                    className="mt-auto"
                >
                    <Button variant="secondary" ><ArrowRight /></Button>
                </motion.div>
                <motion.div
                    variants={OpacityVariant}
                    className="absolute -z-10 top-0 right-0 h-full aspect-square"
                >
                    <Image src="/app_cover.png" width={706} height={760} alt="app"/>
                </motion.div>
            </motion.div>
            <motion.div
                variants={clipPathVariant}
                className="bg-white col-span-2 aspect-[1.19] rounded-lg p-10 flex flex-col relative overflow-hidden"
            >
                <motion.h2
                    variants={clipPathVariant}
                    className="uppercase mb-7"
                >
                    E-commerce
                </motion.h2>
                <motion.p
                    variants={clipPathVariant}
                    className="text-lg"
                >
                    Integrate cryptocurrency payment options seamlessly into your online business with just a few clicks.
                </motion.p>
                <motion.div
                    variants={OpacityVariant}
                    className="mt-auto"
                >
                    <Button variant="secondary" ><ArrowRight /></Button>
                </motion.div>
                <motion.div
                    variants={OpacityVariant}
                    className="absolute -z-10 top-0 right-0 h-full aspect-square"
                >
                    <Image src="/ecommerce_cover.png" width={711} height={711} alt="app"/>
                </motion.div>
            </motion.div>
            <motion.div
                variants={clipPathVariant}
                className="bg-white col-span-2 aspect-[1.19] rounded-lg p-10 flex flex-col relative overflow-hidden"
            >
                <motion.h2
                    variants={clipPathVariant}
                    className="uppercase mb-7"
                >
                    Vending Machine
                </motion.h2>
                <motion.p
                    variants={clipPathVariant}
                    className="text-lg"
                >
                    The smart vending machine helps you increase sales.
                </motion.p>
                <motion.div
                    variants={OpacityVariant}
                    className="mt-auto"
                >
                    <Button variant="secondary" ><ArrowRight /></Button>
                </motion.div>
                {/* * */}
            </motion.div>
            <motion.div
                variants={clipPathVariant}
                className="bg-white col-span-2 aspect-[1.19] rounded-lg p-10 flex flex-col relative overflow-hidden"
            >
                <motion.h2
                    variants={clipPathVariant}
                    className="uppercase mb-7"
                >
                    API
                </motion.h2>
                <motion.p
                    variants={clipPathVariant}
                    className="text-lg"
                >
                    Restful API integration will cover every need of your business
                </motion.p>
                <motion.div
                    variants={OpacityVariant}
                    className="mt-auto"
                >
                    <Button variant="secondary"><ArrowRight /></Button>
                </motion.div>
                <motion.div
                    variants={OpacityVariant}
                    className="absolute -z-10 top-0 right-0 h-full aspect-square"
                >
                    <Image src="/api_cover.png" width={711} height={711} alt="app"/>
                </motion.div>
            </motion.div>
        </motion.div>
    )

}