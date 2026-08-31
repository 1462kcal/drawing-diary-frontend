import { useMemo, useState } from "react";

import type { Diary } from "../types/profile";

interface DiaryCalendarProps {
  diaries: Diary[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

interface CalendarDay {
  date: Date;
  dateString: string;
  isCurrentMonth: boolean;
}

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function DiaryCalendar({
  diaries,
  selectedDate,
  onSelectDate,
}: DiaryCalendarProps) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  /**
   * 일기가 작성된 날짜 Set
   */
  const diaryDates = useMemo(() => {
    return new Set(diaries.map((diary) => diary.createdAt.slice(0, 10)));
  }, [diaries]);

  /**
   * 달력 날짜 생성
   */
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const previousMonthDays = new Date(year, month, 0).getDate();

    const days: CalendarDay[] = [];

    /**
     * 이전 달 날짜
     */
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, previousMonthDays - i);

      days.push({
        date,
        dateString: formatDate(date),
        isCurrentMonth: false,
      });
    }

    /**
     * 현재 달
     */
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      days.push({
        date,
        dateString: formatDate(date),
        isCurrentMonth: true,
      });
    }

    /**
     * 다음 달
     */
    const remaining = Math.ceil(days.length / 7) * 7 - days.length;

    for (let day = 1; day <= remaining; day++) {
      const date = new Date(year, month + 1, day);

      days.push({
        date,
        dateString: formatDate(date),
        isCurrentMonth: false,
      });
    }

    return days;
  }, [currentMonth]);

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <section className="retro-panel calendar-panel">
      <div className="retro-titlebar">
        <span>CALENDAR</span>

        <div className="retro-buttons">
          <span />
          <span />
        </div>
      </div>

      <div className="calendar-content">
        <div className="calendar-navigation">
          <button
            type="button"
            onClick={handlePreviousMonth}
            aria-label="이전 달"
          >
            &lt;
          </button>

          <span>{monthLabel}</span>

          <button type="button" onClick={handleNextMonth} aria-label="다음 달">
            &gt;
          </button>
        </div>

        <div className="calendar-weekdays">
          {WEEKDAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((day) => {
            const hasDiary = diaryDates.has(day.dateString);

            const isSelected = selectedDate === day.dateString;

            return (
              <button
                key={day.dateString}
                type="button"
                disabled={!day.isCurrentMonth || !hasDiary}
                className={[
                  "calendar-day",
                  !day.isCurrentMonth ? "calendar-day-muted" : "",
                  hasDiary ? "calendar-day-has-diary" : "",
                  isSelected ? "calendar-day-selected" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (hasDiary) {
                    onSelectDate(day.dateString);
                  }
                }}
              >
                <span>{day.date.getDate()}</span>

                {hasDiary && <i className="calendar-diary-dot" />}
              </button>
            );
          })}
        </div>

        <div className="calendar-description">
          <span className="calendar-diary-dot" />
          <span>diary written</span>
        </div>
      </div>
    </section>
  );
}

function formatDate(date: Date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
