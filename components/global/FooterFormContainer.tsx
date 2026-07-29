import RequestCallBackForm from '../forms/RequestCallBackForm'

export const FooterFormContainer = () => {
    return (
        <div className="relative border-2 border-border/10 hover:border-border transition-colors duration-200 ease-in-out rounded-2xl mb-10 min-h-[30rem] px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-8 overflow-hidden bg-slate-50 " >
            {/* Decorative elements */}

            {/* Content */}
            <div className="relative z-20 w-full">
                <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                    Request A Callback
                </h1>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                    <div className="w-full ">
                        <RequestCallBackForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
