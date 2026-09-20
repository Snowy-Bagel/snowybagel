export const site = {
  name: "Snowy Bagel",
  url: "https://www.snowybagel.com",
  tagline: "Small apps for real life.",
  description:
    "Snowy Bagel is a tiny app studio making small, kind software for real life. Currently baking Boop and Spoonful.",
  intro:
    "The low-energy days, the phones left on silent, the things that are easy to forget. We make software that's gentle about all of it.",
  about:
    "Snowy Bagel is one person — Gabby Welson — building a few apps carefully instead of a lot of apps quickly. No growth hacks, no dark patterns, no streaks to guilt you.",
  founder: { name: "Gabby Welson", href: "https://welson.net" },
};

export const projects = [
  {
    slug: "boop",
    name: "Boop",
    oneLiner: "A little nudge for your people.",
    description:
      "One tap gets the attention of someone who's said you can have it — even when their notifications are off. No chat, no feed. Just “hey, look at your phone.”",
    platforms: "iPhone, iPad & Apple Watch",
    status: "In the oven",
    statusNote: "Private beta soon",
    href: "https://getbooped.app/" as string | null,
    linkLabel: "getbooped.app" as string | null,
  },
  {
    slug: "spoonful",
    name: "Spoonful",
    oneLiner: "A little care, together.",
    description:
      "A household task manager for days when energy varies. It keeps essential care visible, makes room for “not today,” and counts planning as work too.",
    platforms: "Web now, iOS to come",
    status: "Fresh out",
    statusNote: "Early access",
    href: "https://spoonful.online" as string | null,
    linkLabel: "spoonful.online" as string | null,
  },
];

export const links = [
  { label: "Bluesky", href: "https://bsky.app/profile/gabby.gay" },
  { label: "Mastodon", href: "https://tacobelllabs.net/@gabby" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gabbywelson" },
  { label: "welson.net", href: "https://welson.net" },
];
