export interface Url {
    url: string,
    website: string
}
export function checkURL(link: string): Url {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        return { url: `https://${link}`, website: link };
    }else {
        if (link.startsWith("http://")) {
            return { url: link, website: link.slice(7) };
        }else {
            return { url: link, website: link.slice(8) };
        }
    }
}
export interface Tab {
    titles: string[], 
    links: Url[]
}
function makeTab(sites: string[]): Tab{
    let thing: Tab = {titles: [], links: []};
    for (let site of sites) {
        thing.links.push(checkURL(site));
        thing.titles.push(checkURL(site).website);
    }
    return thing;
}
export const currentTab: Tab = makeTab(["phyotp.github.io"]);
export const pinnedTabs: Tab[] = [makeTab(["arc.net"]),makeTab(["phyotp.github.io"])];
export const tabs: Tab[] = [makeTab(["github.com","chatgpt.com"]),makeTab(["discord.com"])];