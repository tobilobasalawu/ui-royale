import Image from "next/image";

export default function Superflex() {
    return (
        <section className="relative flex flex-col items-center justify-center px-10 py-20 overflow-hidden max-w-[1536px] mx-auto">
            {/* Vector wave background */}
            <div className="absolute inset-0 m-auto w-fit h-fit">
                <Image
                    src="/wave.svg"
                    alt=""
                    width={1788}
                    height={353}
                />
            </div>

            {/* Main content container */}
            <div className="relative flex flex-col lg:flex-row items-end justify-between gap-10 w-full">
                {/* Star shape 1 */}
                <div className="absolute inset-0 mx-auto w-fit h-fit">
                    <Image
                        src="/star_shape_1.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="w-[200px] h-[200px]"
                    />
                </div>

                {/* Text content */}
                <h2 className="font-marcellus text-[32px] leading-[43px] text-white max-w-[315px] ml-[116px]">
                    Export your UI to{" "}
                    <span className="bg-primary-gradient bg-clip-text text-transparent">
                        Superflex
                    </span>{" "}
                    and bring your vision to life with just a few clicks.
                </h2>

                {/* Code snippet container */}
                <Image
                    src="/code_snippet.svg"
                    alt="Code snippet"
                    width={502.39}
                    height={428}
                    className="object-cover mb-[102px]"
                />
            </div>
        </section>
    );
}
