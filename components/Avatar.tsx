export default function Avatar(props: { imageUrl: string }) {

    return (
        <div className="avatar">
            <div className="w-36 rounded-full">
                <img src={ props.imageUrl } />
            </div>
        </div>
    )
}