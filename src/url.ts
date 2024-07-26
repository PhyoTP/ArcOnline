export interface Url {
    url: string,
    domain: string
}
export const hasScheme = /^\w+:\/\//gi;
export const domainFinder = /^(\w+(\.|:))+\w+$/gi;
export function makeURL(link: string): Url {
    const urlPattern = /^(\w+:\/\/)?(\w+(\.|:))+\w+.+$/gi;
    if (!urlPattern.test(link)) {
        return { url: `https://google.com/search?q=${encodeURIComponent(link)}&igu=1`, domain: "google.com" };
    }else if (link.match(hasScheme)){
        return { url: link, domain: (link.match(domainFinder) ?? [link])[0] };
    }else {
        return { url: `https://${link}`, domain: (link.match(domainFinder) ?? [link])[0] }
    }
}
export interface Tab {
    titles: string[], 
    links: Url[],
    history: Url[][],
    future: Url[][]
}
export function makeTab(sites: string[]): Tab{
    let thing: Tab = {titles: [], links: [], history: [], future: []};
    for (let site of sites) {
        thing.links.push(makeURL(site));
        const trimmedUrl = site.replace(hasScheme, "").trim();
        thing.titles.push((trimmedUrl.match(domainFinder)??[site.replace("https://google.com/search?q=","").trim().replace("&igu=1","").trim()])[0]);
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
export const bookmarks: Tab[] = [makeTab(["https://google.com/?igu=1"])];
export const pinnedTabs: Tab[] = [makeTab(["arc.net"]),makeTab(["phyotp.github.io"])];
export const tabs: Tab[] = [makeTab(["easyfun.gg"])];