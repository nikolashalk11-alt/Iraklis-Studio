import { GymHours } from '../data/gymData';

export interface CurrentStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  nextChange: string;
}

export function calculateGymStatus(hours: GymHours[]): CurrentStatus {
  const now = new Date();
  const currentDayIndex = now.getDay(); // 0 is Sunday, 1 is Monday...
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeMinutes = currentHour * 60 + currentMinute;

  const todaySchedule = hours.find((h) => h.dayIndex === currentDayIndex);

  const findNextOpen = () => {
    for (let offset = 1; offset <= 7; offset++) {
      const idx = (currentDayIndex + offset) % 7;
      const nextSchedule = hours.find((h) => h.dayIndex === idx);
      if (nextSchedule && nextSchedule.isOpen) {
        return `${nextSchedule.dayShort} ${nextSchedule.open}`;
      }
    }
    return "Δευ 07:30";
  };

  if (!todaySchedule || !todaySchedule.isOpen) {
    const nextOpen = findNextOpen();
    return {
      isOpen: false,
      statusText: "Κλειστά Σήμερα",
      subText: `Ανοίγει ${nextOpen}`,
      nextChange: nextOpen
    };
  }

  const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
  const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

  const openTimeMinutes = openHour * 60 + openMin;
  const closeTimeMinutes = closeHour * 60 + closeMin;

  if (currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes) {
    const remainingMinutes = closeTimeMinutes - currentTimeMinutes;
    const remainingHours = Math.floor(remainingMinutes / 60);
    const mins = remainingMinutes % 60;

    let sub = `Κλείνει στις ${todaySchedule.close}`;
    if (remainingMinutes <= 60) {
      sub = `Κλείνει σε ${mins} λεπτά`;
    } else if (remainingMinutes <= 120) {
      sub = `Κλείνει σε ${remainingHours}ω ${mins}λ`;
    }

    return {
      isOpen: true,
      statusText: "Ανοιχτά Τώρα",
      subText: sub,
      nextChange: todaySchedule.close
    };
  } else if (currentTimeMinutes < openTimeMinutes) {
    return {
      isOpen: false,
      statusText: "Κλειστά Αυτή τη Στιγμή",
      subText: `Ανοίγει σήμερα στις ${todaySchedule.open}`,
      nextChange: todaySchedule.open
    };
  } else {
    // Find next day's open time
    const nextOpen = findNextOpen();

    return {
      isOpen: false,
      statusText: "Κλειστά για Σήμερα",
      subText: `Ανοίγει ${nextOpen}`,
      nextChange: nextOpen
    };
  }
}
