import type { CollectionEntry } from 'astro:content';

export interface TimelineGroup {
  label: string;
  events: CollectionEntry<'timeline'>[];
}

export function groupTimelineEvents(
  badges: CollectionEntry<'badges'>[],
  events: CollectionEntry<'timeline'>[]
): TimelineGroup[] {
  const sortedBadges = [...badges].sort((a, b) => a.id.localeCompare(b.id));

  const byBadge = new Map<string, CollectionEntry<'timeline'>[]>();
  for (const event of events) {
    const list = byBadge.get(event.data.after_badge) ?? [];
    list.push(event);
    byBadge.set(event.data.after_badge, list);
  }

  const groups: TimelineGroup[] = [];
  for (let i = 0; i < sortedBadges.length; i++) {
    const key = sortedBadges[i].id;
    const events = byBadge.get(key);
    if (!events || events.length === 0) continue;

    const nextBadge = sortedBadges[i + 1];
    const label = nextBadge
      ? `Entre ${sortedBadges[i].data.leader} e ${nextBadge.data.leader}`
      : `Depois de ${sortedBadges[i].data.leader}`;

    groups.push({ label, events });
  }

  return groups;
}
