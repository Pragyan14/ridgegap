type props = {
    message: string
}

export default function CTABtn({message}:props){
    return (
        <a
            href="#book-call"
            className="bg-[#e34d67] text-white px-6 py-2 font-medium hover:transition-all transform hover:scale-105 shadow-lg"
        >
            {message}
        </a>
    )
}