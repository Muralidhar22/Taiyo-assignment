type CountRectProps = {
    title: string;
    count: number
}

const CountRect = ({
    title,
    count
}: CountRectProps) => {
    
    
    
    return(
        <>
            <div className="border-2 rounded-md p-2">
                <h2>{title}</h2>
                <div className="text-3xl font-bold">{count}</div>
            </div>
        </>
    )
}

export default CountRect;