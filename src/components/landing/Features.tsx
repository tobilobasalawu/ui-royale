import Image from "next/image";

export default function Features() {
    return (
        <section className="px-10 pt-[100px] pb-20 h-fit max-w-[1536px] mx-auto">
            <div className="relative w-full h-fit flex flex-col md:flex-row flex-wrap gap-10 lg:gap-0 items-center justify-center">
                {/* Card 1 - Compete from Anywhere */}
                <div className="flex flex-col items-center lg:-mx-5 bg-[#faefcb] p-5 min-w-[300px] max-w-[360px] h-[400px] rounded-2xl transform lg:-rotate-[5.46deg] transition-transform duration-300 hover:scale-[1.01] hover:-rotate-[3.46deg]">
                    <div className="relative flex items-center justify-center w-[215px] h-[184px] ">
                        <Image
                            src="/players.svg"
                            alt="Cursor"
                            width={153}
                            height={93}
                            className=" rotate-[10deg]"
                        />
                        <Image
                            src="/jane_cursor.svg"
                            alt="Cursor"
                            width={63}
                            height={42}
                            className="absolute bottom-0 right-0"
                        />
                        <Image
                            src="/john_cursor.svg"
                            alt="Cursor"
                            width={69}
                            height={36}
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex flex-col space-y-4 h-[139px]">
                        <h3 className="font-marcellus text-2xl text-[#111111]">
                            Compete from Anywhere
                        </h3>
                        <div className="w-[257px]">
                            <p className="font-manrope text-base text-[#111111]">
                                Challenge a friend or a random rival in a
                                head-to-head UI design battle.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/world.svg"
                        alt="World"
                        width={153}
                        height={90}
                        className="absolute"
                    />
                </div>

                {/* Card 2 - Get Scored by AI */}
                <div className="flex flex-col items-center lg:-mx-5 bg-[#a0adfd] p-5 min-w-[300px] max-w-[360px] h-[400px] rounded-2xl transform lg:rotate-[0.32deg] mb-[60px] justify-between transition-transform duration-300 hover:scale-[1.01] hover:rotate-[2.32deg]">
                    <Image
                        src="/ai_score.svg"
                        alt="World"
                        width={180}
                        height={180}
                    />
                    <div className="flex flex-col space-y-4 h-[139px]">
                        <h3 className="font-marcellus text-2xl text-[#111111]">
                            Get Scored by AI
                        </h3>
                        <div>
                            <p className="font-manrope text-base text-[#111111]">
                                Our AI judges your design based on creativity,
                                usability, and accuracy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Customize Your Dream UI */}
                <div className="flex flex-col items-center lg:-mx-5 justify-end z-10 mt-[50px] bg-white p-5 min-w-[300px] max-w-[360px] h-[400px] rounded-2xl transform lg:rotate-[10deg] overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:rotate-[12deg]">
                    <Image
                        src="/ui_wireframe.svg"
                        alt="UI Wireframe"
                        width={224}
                        height={172}
                        className="absolute top-[-15px] left-[-10px] -rotate-[7deg]"
                    />
                    <div className="flex flex-col space-y-4 h-[139px]">
                        <h3 className="font-marcellus text-2xl text-[#111111]">
                            Customize Your Dream UI
                        </h3>
                        <div>
                            <p className="font-manrope text-base text-[#111111]">
                                Drag, drop, tweak, and refine. Make it yours
                                with customization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Climb the Leaderboard */}
                <div className="relative flex flex-col items-center lg:-mx-5 gap-10 p-5 min-w-[300px] max-w-[360px] bg-[#c2baf5] rounded-2xl transform lg:-rotate-[5deg] transition-transform duration-300 hover:scale-[1.01] hover:-rotate-[3deg]">
                    <Image
                        src="/badge_leaderboard.png"
                        alt="Badge Leaderboard"
                        width={180}
                        height={202}
                    />
                    <div className="flex flex-col space-y-4 ">
                        <h3 className="font-marcellus text-2xl text-[#111111]">
                            Climb the Leaderboard
                        </h3>
                        <div>
                            <p className="font-manrope text-base text-[#111111]">
                                Every match earns you points. The better your
                                designs, the higher you rank. Will you become
                                the UI Royale champion?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
