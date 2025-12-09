interface NavLink {
    name: string
    url: string
    icon: string
    children?: NavLink[]
}
export const useNavLinks = ()=>{
    const links: NavLink[] = [
        {
            name: "Home",
            url: "/",
            icon: "mdi:home-variant-outline"
        },
        {
            name: "Map",
            url: "/map",
            icon: "mdi:map",
        },
        {
            name: "Notes",
            url: "/notes",
            icon: "mdi:notebook-multiple",
            children: [
                { name: "Create Note", url: "/notes/new", icon: "mdi:plus" },
                { name: "My Notes", url: "/notes/list", icon: "mdi:format-list-bulleted" }
            ]
        },
        {
            name: "Photos",
            url: "/photos",
            icon: "mdi:photo-library"
        }
    ]

    return readonly(links);
}