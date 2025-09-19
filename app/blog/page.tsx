import PostList from "@/components/PostList"

const list = [
    { id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis euismod purus, eu mattis massa. Quisque gravida mauris vitae dictum vehicula. Nam aliquam facilisis neque ut aliquam. Nulla luctus felis rhoncus nulla auctor, quis fermentum eros gravida. Quisque sodales ultricies accumsan. Sed rhoncus magna a velit pellentesque, id aliquam erat mattis. In ornare scelerisque semper. Pellentesque sit amet viverra nunc. Maecenas sodales sollicitudin ex, sed gravida tortor eleifend quis. Mauris ornare mauris erat, eu mollis eros lobortis eget. In consequat orci ligula, vel accumsan massa finibus at. Praesent quis porta tortor." },
    { id: 2, title: "Second Post", content: "Nulla porttitor efficitur facilisis. Proin gravida ante aliquam mattis interdum. Integer vel tellus ac risus auctor luctus. In quis fringilla lorem. Vestibulum varius sollicitudin tempus. Suspendisse venenatis faucibus leo, sit amet blandit mauris ultrices sed. Integer sit amet sollicitudin lorem." },
    { id: 3, title: "Third Post", content: "Sed finibus sed orci a fringilla. Donec nulla eros, dignissim vel gravida a, dictum sit amet orci. Etiam consectetur at orci sit amet euismod. Nulla facilisi. Ut interdum justo nisi, eu iaculis eros ullamcorper eget. Donec leo odio, suscipit nec tellus ut, accumsan fermentum sapien. Nulla hendrerit, lorem non hendrerit faucibus, eros elit tincidunt ligula, sit amet faucibus mi risus sed enim. Aenean elementum enim sit amet ornare egestas." },
    { id: 4, title: "Fourth Post", content: "Quisque ut ullamcorper enim. Donec placerat blandit est sed lobortis. Nunc euismod eros non arcu scelerisque, vel dapibus turpis scelerisque. Morbi dignissim risus nec libero venenatis, vel euismod sapien cursus. Suspendisse dictum tortor ut est pellentesque laoreet. Nullam condimentum lorem est, pretium tempor ante varius quis. Sed viverra vehicula mollis." },
    { id: 5, title: "Fifth Post", content: "Quisque imperdiet cursus leo ac egestas. Proin gravida purus a orci pellentesque interdum. Praesent in urna non nibh lacinia convallis et at quam. Pellentesque id nisi mi. Duis elit lorem, mollis nec ante in, pretium vehicula ante. Pellentesque nec mollis ante. Praesent in vulputate leo. Mauris tempor elit nec nisl scelerisque, vehicula accumsan sem rutrum. Morbi tempus nec orci a tempor. Praesent placerat elit diam. Fusce malesuada nisl nunc, at ultrices nunc tempor at. Curabitur auctor, orci sed tempor efficitur, nulla neque mollis turpis, eu dignissim libero odio vitae sapien. Pellentesque ornare placerat condimentum. Proin eget interdum orci." },
]

export default function Blog() {
    return (
        <main>
            <h1>Blog</h1>
            <div>
                <ul className="list bg-base-100 rounded-box shadow-md">
                    {
                        list.map(post => {
                            const {id, title:postTitle, content:postContents} = post;
                            return <PostList key={id} title={postTitle} contents={postContents}/>
                        })
                    }
                </ul>
            </div>
        </main>
    )
}