export interface Url {
    url: string,
    website: string
}
export function makeURL(link: string): Url {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i;
        if (!urlPattern.test(link)) {
            return { url: `https://google.com/search?q=${encodeURIComponent(link)}&igu=1`, website: link };
        }else{
            return { url: `https://${link}`, website: link };
        }
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
    links: Url[],
    history: Url[][],
    future: Url[][]
}
function makeTab(sites: string[]): Tab{
    let thing: Tab = {titles: [], links: [], history: [], future: []};
    for (let site of sites) {
        thing.links.push(makeURL(site));
        thing.titles.push(makeURL(site).website);
    }
    return thing;
}
export function goBack(tab: Tab){
    if (tab.history.length > 0) {
        tab.future.push(tab.links);
        tab.links = tab.history[tab.history.length - 1];
    }
}
export function goForward(tab: Tab) {
    if (tab.future.length > 0) {
        tab.history.push(tab.links);
        tab.links = tab.future[tab.future.length - 1];
    }
}
export const currentTab: Tab = makeTab(["phyotp.github.io"]);
export const pinnedTabs: Tab[] = [makeTab(["arc.net"]),makeTab(["phyotp.github.io"])];
export const tabs: Tab[] = [makeTab(["github.com","chatgpt.com"]),makeTab(["discord.com"])];