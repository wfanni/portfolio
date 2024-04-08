import { forwardRef } from "react"

const Contact = forwardRef(function Contact({}, ref) {
    return (
        <section ref={ref} className="contact h-screen w-full flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] -mt-16 uppercase">Contact me</h2>
            <ul className="flex flex-col gap-12">
                <li>fanniwihl@gmail.com</li>
                <li><a href="https://linkedin.com/in/fanni-wihl">Linkedin</a></li>
                <li><a href="https://github.com/wfanni">Github</a></li>

            </ul>
        </section>
    )
})

export default Contact