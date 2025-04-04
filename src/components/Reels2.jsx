export default function Reels({ data, onClick, openPanel }) {
    const handleClick = (index) => {
        onClick(index);
    }
    return (
        <div className="w-full flex flex-wrap gap-4 justify-between">
            {data.map((slide, index) =>
                <video 
                src={slide.sources.src}
                type={slide.sources.type}
                poster={slide.poster}
                alt={slide.description}
                controls
                playinline
                autoplay
                className={`
                    ${slide.position ? slide.position : ""}
                    relative z-1 bg-white max-w-[200px] max-h-[355px] border-2 border-transparent object-cover shadow-lg shadow-gray-400 group-hover:z-[8] group-hover:border-orange group-hover:shadow-xl transition-all duration-[0.35s]
                    `} >
                </video>
            )}
        </div>
    )
}