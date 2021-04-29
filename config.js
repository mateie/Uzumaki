const {
    TOKEN,
    OWNER,
    SO,
    INVITE_LINK,
    DB,
    OSU_API,
    GITHUB_REPO_USERNAME,
    GITHUB_REPO_NAME,
    LAVA_HOST,
    LAVA_PORT,
    LAVA_PASS,
    YT_KEY,
    ENABLE_SPOTIFY,
    SPOTIFY_ID,
    SPOTIFY_SECRET,
    SPOTIFY_PLAYLIST_PAGE_LIMIT,
} = process.env;

module.exports = {
    token: TOKEN,
    default_prefix: 'd',
    owners: [OWNER, SO],
    invite_link: INVITE_LINK,
    database: DB,
    osu_api: OSU_API,
    github: {
        username: GITHUB_REPO_USERNAME,
        repo: GITHUB_REPO_NAME,
    },
    lavalink: {
        host: LAVA_HOST,
        password: LAVA_PASS,
        port: LAVA_PORT,
    },
    youtube_api: YT_KEY,
    spotify: {
        enabled: ENABLE_SPOTIFY === 'true' ? true : false,
        id: SPOTIFY_ID,
        secret: SPOTIFY_SECRET,
        playlist_limit: SPOTIFY_PLAYLIST_PAGE_LIMIT,
    },
};