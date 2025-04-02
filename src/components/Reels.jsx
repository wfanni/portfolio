export default function Reels({ data, onClick, openPanel }) {
    const handleClick = (index) => {
        onClick(index);
    }
    return (
        <div className="w-full flex flex-wrap gap-4 justify-between">
            {data.map((slide, index) =>
            <div key={index} onClick={() => handleClick(index)} className="group relative cursor-pointer after:content-[''] after:opacity-0 after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[181px] after:h-[319px] after:bg-black/25 after:z-[9] hover:after:opacity-[100] hover:after:scale-[115%] after:transition-all after:duration-[0.35s]">
                <i className="fa-solid fa-play text-white text-[4rem] opacity-0 group-hover:opacity-100 absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-200"></i>
                <video 
                source={slide.sources.src}
                type={slide.sources.type}
                poster={slide.poster}
                alt={slide.description} 
                className={`
                    ${slide.position ? slide.position : ""}
                    relative z-1 bg-white max-w-[200px] max-h-[355px] p-2 border-2 border-transparent object-cover shadow-lg shadow-gray-400 group-hover:z-[8] group-hover:border-orange group-hover:shadow-xl group-hover:scale-[115%] transition-all duration-[0.35s]
                    `} >
                </video>
            </div>
            )}
        </div>
    )
}