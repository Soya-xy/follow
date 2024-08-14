import type { FeedViewType } from "@renderer/lib/enum"

import type { DayOf } from "./constants"

export type DailyView = Extract<
  FeedViewType,
  FeedViewType.Articles | FeedViewType.SocialMedia
>
export interface DailyItemProps {
  view: DailyView
  day: DayOf
}
