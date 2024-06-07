export default function NotFound() {
    return (
        <div className="notFound">
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-4xl pb-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00CCFF] to-[#f94aff]">404</h1>
                <h1 className="text-4xl pb-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00CCFF] to-[#f94aff]">Page Not Found</h1>
                <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00CCFF] to-[#f94aff]">The Page you are looking for does not exist.</h2>
            </div>
        </div>
    );
}