export const API_ROOT = 'https://www.reddit.com';

export const dndSubreddits = ['/r/DnD', '/r/dndnext', '/r/DungeonsAndDragons', '/r/Dungeons_and_Dragons', '/r/DnD5e'];
export const warhammerSubreddits = ['/r/40krpg/'];
export const shadowrunSubreddits = ['/r/Shadowrun'];
export const chthuluSubreddits = ['/r/callofcthulhu'];
export const pathfinderSubreddits = ['/r/Pathfinder_RPG', '/r/Pathfinder2e'];
export const starWarsSubreddits = ['/r/swrpg'];
export const starfinderSubreddits = ['/r/starfinder_rpg'];
export const whiteWolfSubreddits = ['/r/WhiteWolfRPG'];
export const savageWorldsSubreddits = ['/r/savageworlds'];
export const cyberpunkSubreddits = ['/r/cyberpunkred'];
export const generalSubreddits = ['/r/rpg', '/r/lfg', '/r/tabletop/', '/r/osr/'];

export const creativeSubreddits = ['/r/worldbuilding', '/r/minipainting', '/r/imaginarymaps', '/r/dndmaps', '/r/battlemaps'];
export const toolsSubreddits = ['/r/Roll20', '/r/wonderdraft', '/r/inkarnate', '/r/HeroForgeMinis'];
export const entertainmentSubreddits = ['/r/dndmemes', '/r/DnDGreentext', '/r/criticalrole', '/r/rpghorrorstories', '/r/TheAdventureZone'];
export const dmSubreddits = ['/r/DnDBehindTheScreen', '/r/DMAcademy', '/r/mattcolville', '/r/DungeonMasters', '/r/AskGameMasters/'];
export const gameDesignSubreddits = ['/r/gamedesign', '/r/tabletopgamedesign', '/r/RPGdesign', '/r/RPGcreation'];
export const hombrewSubreddits = ['/r/UnearthedArcana', '/r/DnDHomebrew', '/r/HomebrewDnD/'];

export const getThemeSubredditPosts = async (subreddits) => {
    const allPosts = [];

    subreddits.forEach(async (subreddit) =>  {
        const response = await fetch(`${API_ROOT}${subreddit}.json`);
        const json = await response.json();
        const posts = json.data.children.map((post) => post.data);
        allPosts.concat(posts);
    });

    return allPosts;
};

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
  
    return json.data.children.map((subreddit) => subreddit.data);
};