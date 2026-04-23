import Image from "next/image";

export default function FlavorHero() {

    return (
        <section className="w-full">
            <figure className="w-full">
                <Image
                    src="/images/flavorHero_1.png"
                    alt="Hero Image"
                    width={1920} // use your image's actual width
                    height={600} // use your image's actual height
                    className="w-full h-auto object-cover"
                    priority
                />
            </figure>
        </section>
    )
}