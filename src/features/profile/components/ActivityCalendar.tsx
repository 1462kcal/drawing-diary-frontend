import type { Activity } from "../types/profile";

interface ActivityCalendarProps {
  activities: Activity[];
}

const CELL_SIZE = 13;

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 5) return 3;
  return 4;
}

const COLORS = ["#eeeeee", "#c6e6c6", "#8dcc8d", "#4cae4c", "#207520"];

export default function ActivityCalendar({
  activities,
}: ActivityCalendarProps) {
  const activityMap = new Map(
    activities.map((activity) => [activity.date, activity.count]),
  );

  const today = new Date();

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  // 시작점을 일요일로 맞춤
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const weeks: Date[][] = [];

  const current = new Date(startDate);

  for (let week = 0; week < 53; week++) {
    const days: Date[] = [];

    for (let day = 0; day < 7; day++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    weeks.push(days);
  }

  return (
    <section
      style={{
        padding: 16,
      }}
    >
      <h3
        style={{
          margin: "0 0 14px",
          fontSize: 15,
        }}
      >
        활동
      </h3>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 3,
            width: "max-content",
          }}
        >
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {week.map((date) => {
                const dateKey = date.toISOString().slice(0, 10);

                const count = activityMap.get(dateKey) ?? 0;

                const level = getLevel(count);

                return (
                  <div
                    key={dateKey}
                    title={`${dateKey} · ${count}개`}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 2,
                      backgroundColor: COLORS[level],
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 4,
          marginTop: 10,
          fontSize: 10,
          color: "#777",
        }}
      >
        적음
        {COLORS.map((color) => (
          <span
            key={color}
            style={{
              width: 11,
              height: 11,
              borderRadius: 2,
              backgroundColor: color,
            }}
          />
        ))}
        많음
      </div>
    </section>
  );
}
