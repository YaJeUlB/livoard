export default function PostList(props: {
    title: string;
    contents: string;
}) {
    const { title, contents } = props;

    return (
        <li className="list-row">
            <div>
                <h3>{title}</h3>
                <br/>
                <p className="list-col-wrap">{contents}</p>
            </div>
        </li>
    )
}