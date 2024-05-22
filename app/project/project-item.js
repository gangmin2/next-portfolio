export default function ProjectItem({ data }) {
    const title = data.properties.Project.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].text.content;
    const period = data.properties.Period.date;  // .start / .end
    const githubURL = data.properties['GitHub URL'].url;
    const tags = data.properties.Tags.multi_select;  // id / name / color;
    const coverImgUrl = data.cover.external.url;

    return (
        <div className="card m-4 rounded-2xl" key={data.id}>
            <img src={coverImgUrl} className="w-full h-48 rounded-t-2xl" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <h2 className="my-2">{description}</h2>
                <h2 className="text-gray-400 text-sm">{period.start} ~ {period.end}</h2>
                <a href={githubURL} target="_blank" className="font-bold text-blue-500 hover:text-blue-700">GitHub Link</a>
                <div className="flex gap-2 mt-3">
                    {tags.map(tag => <h2 key={tag.id} className="text-xs font-semibold text-gray-50 rounded px-2 py-1" style={{ backgroundColor: `${tag.color}`, }}>{tag.name}</h2>)}
                </div>
            </div>
        </div>
    )
}