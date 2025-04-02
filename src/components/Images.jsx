export default function Images({ data, onClick, openPanel }) {
    const handleClick = (index) => {
        onClick(index);
    }
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {data.map((slide, index) =>
            <div key={index} onClick={() => handleClick(index)} className="group">
                <img 
                src={slide.src} 
                alt={slide.description} 
                className={`
                    ${slide.position ? slide.position : ""}
                    ${openPanel === 3 ? "w-80 h-60 " : null}
                    ${openPanel === 4 ? "w-72 h-60" : null}
                    ${openPanel === 5 ? "w-80 h-56" : null}
                    relative z-1 bg-white w-44 h-44 p-2 border-2 border-transparent object-cover cursor-pointer shadow-lg shadow-gray-400 group-hover:z-10 group-hover:border-orange group-hover:shadow-xl group-hover:scale-[115%] transition-all duration-[0.35s]`}/>
            </div>
            )}
        </div>
    )
}